import cx from 'clsx';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { Button, NumberStepper } from '..';
import { actAdd } from '../../redux/cartSlice';
import styles from './AddToCart.module.scss';

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const quantityEl = useRef(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const addItem = () => {
    dispatch(actAdd({
      product: {
        mobile: product.mobile,
        name: product.name,
        price: product.price,
        shortName: product.shortName,
        slug: product.slug,
      },
      quantity: quantityEl.current.value,
    }));
    toast.success('Item added to cart', {
      duration: 1250,
      className: cx(styles.toast),
    });
  };

  useEffect(() => {
    if (quantityEl.current) {
      quantityEl.current.value = 1;
    }
  }, [router.query.slug]);

  return (
    <div className={cx(styles.wrapper)}>
      <NumberStepper
        error={error}
        id={`product-page-${product.slug}`}
        ref={quantityEl}
        setError={setError}
      />
      <Button
        disabled={error}
        onClick={addItem}
        variant="1"
      >
        add to cart
      </Button>
    </div>
  );
};

AddToCart.propTypes = {
  product: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shortName: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddToCart;
