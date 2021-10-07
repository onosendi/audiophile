import cx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  AppBar,
  Button,
  Container,
  Footer,
  GoBack,
  ProductImage,
  TextField,
  ThankYou,
} from '..';
import { useCart } from '../../hooks';
import api, { descriptors as desc } from '../../lib/api';
import { currency } from '../../lib/utils';
import { actClear } from '../../redux/cartSlice';
import styles from './CheckoutPage.module.scss';
import PaymentMethod from './PaymentMethod';

const CheckoutPage = () => {
  const formEl = useRef(null);
  const [errors, setErrors] = useState({});
  const [cartData, setCartData] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    items,
    totalCost,
    shipping,
    VAT,
    grandTotal,
  } = useCart();

  const clearErrors = () => {
    setErrors({});
  };

  const submit = async () => {
    clearErrors();

    const fd = new FormData(formEl.current);
    const formData = Object.fromEntries(fd);

    try {
      await api(desc.postCheckout({ data: formData }));
      setCartData({ items, grandTotal });
      dispatch(actClear());
      setShowThankYou(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    setShowThankYou(false);
  }, [router.pathname]);

  return (
    <>
      <AppBar wrapperClassName={cx(styles.appBarWrapper)} isSeparated={false} />
      <GoBack wrapperClassName={cx(styles.goBack)} />
      <Container
        className={cx(styles.mainWrapper)}
        component="main"
        wrapperClassName={cx(styles.containerWrapper)}
        wrapperComponent="div"
      >
        <form className={cx(styles.formContainer)} noValidate ref={formEl}>
          <h1 className={cx('type-4')}>checkout</h1>
          <fieldset>
            <legend>billing details</legend>
            <div className={cx(styles.fieldWrapper)}>
              <TextField
                error={!!errors?.name}
                helperText={errors?.name?.msg}
                id="name"
                label="Name"
                name="name"
                placeholder="John Doe"
              />
              <TextField
                error={!!errors?.email}
                helperText={errors?.email?.msg}
                id="email"
                label="Email Address"
                name="email"
                placeholder="john@doe.com"
                type="email"
              />
              <TextField
                error={!!errors?.phone}
                helperText={errors?.phone?.msg}
                id="phone"
                label="Phone Number"
                name="phone"
                placeholder="+1 202-555-0136"
              />
            </div>
          </fieldset>
          <fieldset className={cx(styles.shippingInfo)}>
            <legend>shipping info</legend>
            <div className={cx(styles.fieldWrapper)}>
              <TextField
                error={!!errors?.address}
                helperText={errors?.address?.msg}
                id="address"
                label="Your Address"
                name="address"
                placeholder="1137 Williams Avenue"
              />
              <TextField
                error={!!errors?.zip}
                helperText={errors?.zip?.msg}
                id="zip"
                label="ZIP Code"
                name="zip"
                placeholder="10001"
              />
              <TextField
                error={!!errors?.city}
                helperText={errors?.city?.msg}
                id="city"
                label="City"
                name="city"
                placeholder="New York"
              />
              <TextField
                error={!!errors?.country}
                helperText={errors?.country?.msg}
                id="country"
                label="Country"
                name="country"
                placeholder="United States"
              />
            </div>
          </fieldset>
          <fieldset className={cx(styles.paymentDetails)}>
            <legend>payment details</legend>
            <PaymentMethod errors={errors} />
          </fieldset>
        </form>
        <div className={cx(styles.summaryContainer)}>
          <span className={cx('type-6', styles.summaryHeader)}>summary</span>
          <ul className={cx(styles.cartItems)}>
            {items.map((product) => {
              const href = `/product/${product.slug}`;

              return (
                <li key={product.slug}>
                  <ProductImage
                    href={href}
                    mobile={product.mobile}
                    name={product.name}
                  />
                  <div className={cx(styles.productInfo)}>
                    <Link href={href}>
                      <a className={cx('type-body', styles.productLink)}>
                        {product.shortName}
                      </a>
                    </Link>
                    <span className={cx('type-body', styles.productPrice)}>
                      {currency({ number: product.price })}
                    </span>
                    <span className={cx('type-body', styles.productQuantity)}>
                      {product.quantity}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <dl className={cx(styles.totals)}>
            <dt>total</dt>
            <dd>{currency({ number: totalCost })}</dd>
            <dt>shipping</dt>
            <dd>{currency({ number: shipping })}</dd>
            <dt>vat (included)</dt>
            <dd>{currency({ number: VAT })}</dd>
            <dt>grand total</dt>
            <dd className={cx(styles.grandTotal)}>
              {currency({ number: grandTotal })}
            </dd>
          </dl>
          <Button
            disabled={!items.length}
            expand
            onClick={submit}
            type="submit"
            variant="1"
          >
            continue &amp; pay
          </Button>
        </div>
      </Container>
      <Footer />
      {showThankYou && <ThankYou {...cartData} />}
    </>
  );
};

export default CheckoutPage;
