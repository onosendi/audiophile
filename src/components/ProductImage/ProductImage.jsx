import cx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { breakpoints } from '../../lib/utils';
import styles from './ProductImage.module.scss';

const ProductImage = ({
  className,
  desktop,
  href,
  mobile,
  name,
  tablet,
}) => (
  <Link href={href}>
    <a className={cx(styles.productImage, className)}>
      <picture>
        {!!desktop && (
          <source srcSet={desktop} media={`(min-width: ${breakpoints.lg})`} />
        )}
        {!!tablet && (
          <source srcSet={tablet} media={`(min-width: ${breakpoints.md})`} />
        )}
        <img src={mobile} alt={name} />
      </picture>
    </a>
  </Link>
);

ProductImage.defaultProps = {
  className: null,
  desktop: null,
  tablet: null,
};

ProductImage.propTypes = {
  className: PropTypes.string,
  desktop: PropTypes.string,
  href: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tablet: PropTypes.string,
};

export default ProductImage;
