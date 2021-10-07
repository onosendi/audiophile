import cx from 'clsx';
import PropTypes from 'prop-types';

import styles from './NewProduct.module.scss';

const NewProduct = ({ className }) => (
  <span className={cx('type-overline', styles.newProduct, className)}>new product</span>
);

NewProduct.defaultProps = {
  className: null,
};

NewProduct.propTypes = {
  className: PropTypes.string,
};

export default NewProduct;
