import cx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  Backdrop,
  Button,
  Portal,
  ProductImage,
} from '..';
import { currency, pluralize } from '../../lib/utils';
import styles from './ThankYou.module.scss';

const ThankYou = ({ grandTotal, items }) => {
  const [open, setOpen] = useState(false);

  const otherItemsCount = items.length - 1;
  const itemsText = pluralize({ text: 'item', number: otherItemsCount });
  const buttonText = open ? 'View less' : `and ${otherItemsCount} other ${itemsText}`;

  const toggleOtherItems = () => {
    setOpen(!open);
  };

  return (
    <>
      <Backdrop show />
      <Portal className={cx(styles.wrapper)} id="thank-you">
        <div className={cx(styles.container)}>
          <p className={cx('type-5')}>
            Thank you
            <br />
            for your order
          </p>
          <p className={cx('type-body')}>You will receive an email confirmation shortly.</p>
          <div className={cx(styles.orderInfoWrapper)}>
            <div className={cx(styles.itemsWrapper)}>
              <ul className={cx(styles.items)} data-open={open}>
                {items.map((product) => {
                  const href = `/product/${product.slug}`;

                  return (
                    <li key={product.slug}>
                      <ProductImage
                        href={href}
                        mobile={product.mobile}
                        name={product.name}
                      />
                      <div className={cx('type-body', styles.productInfo)}>
                        <Link href={href}>
                          <a>{product.shortName}</a>
                        </Link>
                        <span>{currency({ number: product.price })}</span>
                        <span>{product.quantity}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {otherItemsCount > 0 && (
                <div className={cx(styles.viewMoreContainer)}>
                  <button
                    className={cx('type-form-label')}
                    onClick={toggleOtherItems}
                    type="button"
                  >
                    {buttonText}
                  </button>
                </div>
              )}
            </div>
            <div className={cx(styles.totalWrapper)}>
              <span className={cx('type-body', styles.total)}>Grand Total</span>
              <span className={cx('type-6', styles.total)}>{currency({ number: grandTotal })}</span>
            </div>
          </div>
          <Button expand href="/" variant="1">Back to home</Button>
        </div>
      </Portal>
    </>
  );
};

ThankYou.propTypes = {
  grandTotal: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
};

export default ThankYou;
