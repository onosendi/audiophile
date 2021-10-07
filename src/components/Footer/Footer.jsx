import cx from 'clsx';
import Link from 'next/link';

import { Container, Logo } from '..';
import { navList } from '../../lib/utils';
import styles from './Footer.module.scss';

const Footer = () => (
  <Container
    className={cx(styles.container)}
    component="footer"
    wrapperComponent="div"
  >
    <Logo className={cx(styles.logo)} />
    <nav className={cx(styles.nav)}>
      {navList.map((i) => (
        <Link href={i.href} key={i.text}>
          <a className={cx('type-sub-title')}>{i.text}</a>
        </Link>
      ))}
    </nav>
    <p className={cx(styles.info)}>Audiophile is an all in one stop to fulfill your audio needs. We&lsquo;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&lsquo;re open 7 days a week.</p>
    <p className={cx(styles.copyright)}>Copyright 2021. All Rights Reserved</p>
    <div className={cx(styles.socialWrapper)}>
      {['facebook', 'twitter', 'instagram'].map((i) => (
        <Link href="/" key={i}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a aria-label={i} className={cx(styles[i])} />
        </Link>
      ))}
    </div>
  </Container>
);

export default Footer;
