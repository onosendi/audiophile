import { body, validationResult } from 'express-validator';
import nc from 'next-connect';

import msg from '../../lib/messages';
import status from '../../lib/httpStatusCodes';

const paymentMethodIsEmoney = (value, { req }) => req.body.paymentMethod === 'eMoney';

const handler = nc()
  .use([
    body('name').notEmpty().withMessage(msg.error.required),
    body('email')
      .notEmpty()
      .withMessage(msg.error.required)
      .isEmail()
      .withMessage(msg.error.email),
    body('phone').notEmpty().withMessage(msg.error.required),
    body('address').notEmpty().withMessage(msg.error.required),
    body('zip').notEmpty().withMessage(msg.error.required),
    body('city').notEmpty().withMessage(msg.error.required),
    body('country').notEmpty().withMessage(msg.error.required),
    body('eMoneyNumber')
      .if(paymentMethodIsEmoney)
      .notEmpty()
      .withMessage(msg.error.required)
      .isNumeric()
      .withMessage(msg.error.number),
    body('eMoneyPin')
      .if(paymentMethodIsEmoney)
      .notEmpty()
      .withMessage(msg.error.required)
      .isNumeric()
      .withMessage(msg.error.number),
  ])
  .post((req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.status(status.HTTP_200_OK).json({});
      return;
    }

    res.status(status.HTTP_422_UNPROCESSABLE_ENTITY).json(errors.mapped());
  });

export default handler;
