import cx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { createElement } from 'react';

import styles from './Button.module.scss';

const Button = ({
  children,
  className,
  expand,
  href,
  type,
  variant,
  ...props
}) => {
  const commonProps = {
    className: cx(
      'type-button',
      styles.button,
      styles[`variant${variant}`],
      expand && styles.expand,
      className,
    ),
    ...props,
  };

  const element = href
    ? createElement('a', commonProps, children)
    : createElement('button', { ...commonProps, type }, children);

  return href ? <Link href={href}>{element}</Link> : element;
};

Button.defaultProps = {
  className: null,
  expand: false,
  href: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  expand: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['1', '2', '3']).isRequired,
};

export default Button;
