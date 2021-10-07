import cx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

import {
  Cart,
  Container,
  Drawer,
  Logo,
} from '..';
import { navList } from '../../lib/utils';
import styles from './AppBar.module.scss';

const AppBar = ({ isSeparated, wrapperClassName }) => (
  <Container
    className={cx(
      styles.container,
      !!isSeparated && styles.separator,
    )}
    component="header"
    wrapperClassName={cx(styles.wrapper, wrapperClassName)}
    wrapperComponent="div"
  >
    <Drawer />
    <Logo className={cx(styles.logo)} />
    <nav className={cx(styles.nav)}>
      {navList.map((i) => (
        <Link href={i.href} key={i.text}>
          <a className={cx('type-sub-title')}>{i.text}</a>
        </Link>
      ))}
    </nav>
    <Cart className={cx(styles.cart)} />
  </Container>
);

AppBar.defaultProps = {
  wrapperClassName: null,
};

AppBar.propTypes = {
  isSeparated: PropTypes.bool.isRequired,
  wrapperClassName: PropTypes.string,
};

export default AppBar;
