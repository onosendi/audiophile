import cx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Logo.module.scss';

const Logo = ({ className }) => (
  <Link href="/">
    <a
      aria-label={process.env.NEXT_PUBLIC_APP_NAME}
      className={cx(styles.logo, className)}
    >
      {process.env.NEXT_PUBLIC_APP_NAME}
    </a>
  </Link>
);

Logo.defaultProps = {
  className: null,
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
