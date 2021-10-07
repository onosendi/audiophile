import cx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { RadioField, TextField } from '..';

const PaymentMethod = ({ errors }) => {
  const [selected, setSelected] = useState('eMoney');

  const onChange = (event) => {
    setSelected(event.target.value);
  };

  const renderDetails = () => {
    if (selected === 'eMoney') {
      return (
        <>
          <TextField
            error={!!errors?.eMoneyNumber}
            helperText={errors?.eMoneyNumber?.msg}
            id="e-money-number"
            label="e-Money Number"
            name="eMoneyNumber"
            placeholder="238521993"
          />
          <TextField
            error={!!errors?.eMoneyPin}
            helperText={errors?.eMoneyPin?.msg}
            id="e-money-pin"
            label="e-Money Pin"
            name="eMoneyPin"
            placeholder="6891"
          />
        </>
      );
    }
    return <p className={cx('type-body')}>The &lsquo;Cash on Delivery&rsquo; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>;
  };

  return (
    <>
      <div>
        <span className={cx('type-form-label')}>Payment Method</span>
        <RadioField
          checked={selected === 'eMoney'}
          id="e-money"
          label="e-Money"
          name="paymentMethod"
          onChange={onChange}
          value="eMoney"
        />
        <RadioField
          checked={selected === 'COD'}
          id="COD"
          label="Cash on Delivery"
          name="paymentMethod"
          onChange={onChange}
          value="COD"
        />
      </div>
      <div>
        {renderDetails()}
      </div>
    </>
  );
};

PaymentMethod.propTypes = {
  errors: PropTypes.shape({
    eMoneyNumber: PropTypes.shape({
      msg: PropTypes.string,
    }),
    eMoneyPin: PropTypes.shape({
      msg: PropTypes.string,
    }),
  }).isRequired,
};

export default PaymentMethod;
