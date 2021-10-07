import cx from 'clsx';
import PropTypes from 'prop-types';

import { Container } from '..';

import styles from './BestAudioGear.module.scss';

const BestAudioGear = ({ className }) => (
  <Container
    className={cx(styles.aside, className)}
    component="aside"
    wrapperClassName={cx(styles.containerWrapper)}
    wrapperComponent="div"
  >
    <div className={cx(styles.image)} />
    <div className={cx(styles.content)}>
      <span className={cx('type-4')}>
        bringing you the
        {' '}
        <span>best</span>
        {' '}
        audio gear
      </span>
      <p className={cx('type-body')}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  </Container>
);

BestAudioGear.defaultProps = {
  className: null,
};

BestAudioGear.propTypes = {
  className: PropTypes.string,
};

export default BestAudioGear;
