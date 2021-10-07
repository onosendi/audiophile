import cx from 'clsx';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Container } from '..';
import styles from './GoBack.module.scss';

const GoBack = ({ className, wrapperClassName }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Container
      component="nav"
      wrapperClassName={cx('type-body', wrapperClassName)}
      wrapperComponent="div"
    >
      <button
        className={cx(styles.button, className)}
        onClick={handleClick}
        type="button"
      >
        Go Back
      </button>
    </Container>
  );
};

GoBack.defaultProps = {
  className: null,
  wrapperClassName: null,
};

GoBack.propTypes = {
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default GoBack;
