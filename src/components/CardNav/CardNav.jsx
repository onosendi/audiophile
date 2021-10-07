import cx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { navList } from '../../lib/utils';
import styles from './CardNav.module.scss';

const CardNav = ({ className, onClick }) => (
  <nav className={cx(styles.cardNav, className)}>
    {navList.map((i) => i.text !== 'home' && (
      <Link href={i.href} key={i.text}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <a className={cx(styles.link, styles[i.text])} onClick={onClick}>
          <span className={cx('type-body', styles.text)}>{i.text}</span>
          <span className={cx('type-button', styles.shopText)}>
            Shop
            <span />
          </span>
        </a>
      </Link>
    ))}
  </nav>
);

CardNav.defaultProps = {
  className: null,
  onClick: () => {},
};

CardNav.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardNav;
