import cx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Backdrop,
  Button,
  NumberStepper,
  ProductImage,
} from '..';
import { useCart, useKeyDown, useOutsideClick } from '../../hooks';
import {
  actAdd,
  actClear,
  actRemove,
} from '../../redux/cartSlice';
import { currency } from '../../lib/utils';
import styles from './Cart.module.scss';

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [out, setOut] = useState(false);
  const cartRef = useRef(null);
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, totalItems, totalCost } = useCart();

  const checkoutHref = '/checkout';

  const onAnimationEnd = () => {
    if (out) {
      setOut(false);
      setOpen(false);
    }
  };

  const openCart = () => {
    setOpen(true);
  };

  const closeCart = () => {
    setOut(true);
  };

  const toggleCart = () => {
    if (open) {
      closeCart();
    } else {
      openCart();
    }
  };

  const clearCart = () => {
    dispatch(actClear());
  };

  const updateCart = ({ product }) => (quantity) => {
    dispatch(actAdd({
      product,
      quantity,
      overrideQuantity: true,
    }));
  };

  const removeItem = ({ slug }) => () => {
    dispatch(actRemove(slug));
  };

  useOutsideClick({
    handler: closeCart,
    isEnabled: open,
    refs: [cartRef, buttonRef],
  });

  useKeyDown({
    keyHandlerArr: [[['Escape'], closeCart]],
    isEnabled: open,
  });

  const renderContent = () => {
    if (!items.length) {
      return <p className={cx('type-body', styles.emptyCart)}>Your cart is empty!</p>;
    }

    return (
      <>
        <div className={cx(styles.headerWrapper)}>
          <span className={cx('type-6')}>
            Cart (
            {totalItems}
            )
          </span>
          <button
            className={cx('type-body', styles.clearCart)}
            onClick={clearCart}
            type="button"
          >
            Remove all
          </button>
        </div>
        <ul className={cx(styles.items)}>
          {items.map((product) => {
            const href = `/product/${product.slug}`;

            return (
              <li key={product.slug}>
                <ProductImage
                  href={href}
                  mobile={product.mobile}
                  name={product.name}
                />
                <div className={cx('type-body', styles.info)}>
                  <Link href={href}>
                    <a>{product.shortName}</a>
                  </Link>
                  <span>{currency({ number: product.price })}</span>
                </div>
                <div className={cx(styles.stepperAndRemove)}>
                  <NumberStepper
                    changeAction={updateCart({ product })}
                    defaultValue={product.quantity}
                    id={`cart-${product.slug}`}
                  />
                  <button
                    className={cx('type-body', styles.removeItem)}
                    onClick={removeItem({ slug: product.slug })}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={cx(styles.total)}>
          <span className={cx('type-body')}>Total</span>
          <span className={cx('type-6')}>{currency({ number: totalCost })}</span>
        </div>
        {router.pathname !== checkoutHref && (
          <Button
            className={cx(styles.checkout)}
            expand
            href={checkoutHref}
            variant="1"
          >
            checkout
          </Button>
        )}
      </>
    );
  };

  const renderCart = () => (
    <>
      <Backdrop show={!out} />
      <div
        className={cx(styles.cart, out ? styles.close : styles.open)}
        onAnimationEnd={onAnimationEnd}
        ref={cartRef}
      >
        {renderContent()}
      </div>
    </>
  );

  return (
    <>
      <div className={cx(styles.cartButtonWrapper)}>
        <button
          aria-label="cart"
          className={cx(styles.cartButton)}
          onClick={toggleCart}
          ref={buttonRef}
          type="button"
        >
          <span className={cx(styles.cartIcon)} />
        </button>
        {totalItems > 0 && (
          <span className={cx('type-body', styles.cartIconTotalItems)}>{totalItems}</span>
        )}
      </div>
      {open && renderCart()}
    </>
  );
};

export default Cart;
