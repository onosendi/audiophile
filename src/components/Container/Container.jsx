import cx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = ({
  children,
  className,
  component: Component,
  wrapperClassName,
  wrapperComponent: WrapperComponent,
  ...props
}) => {
  const component = (
    <Component className={cx(styles.container, className)} {...props}>
      {children}
    </Component>
  );

  if (WrapperComponent) {
    return (
      <WrapperComponent className={cx(styles.wrapper, wrapperClassName)}>
        {component}
      </WrapperComponent>
    );
  }

  return component;
};

Container.defaultProps = {
  className: null,
  component: 'div',
  wrapperClassName: null,
  wrapperComponent: null,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.string,
  wrapperClassName: PropTypes.string,
  wrapperComponent: PropTypes.string,
};

export default Container;
