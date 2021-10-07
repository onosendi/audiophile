import cx from 'clsx';
import PropTypes from 'prop-types';

import styles from './InputLabel.module.scss';

const InputLabel = ({
  children,
  className,
  error,
  helperText,
  htmlFor,
  label,
  ...props
}) => (
  <label
    className={cx(
      'type-form-label',
      styles.label,
      !!error && styles.error,
      className,
    )}
    htmlFor={htmlFor}
    {...props}
  >
    <span className={cx(styles.labelHelperWrapper)}>
      <span>
        {label}
      </span>
      {!!helperText && (
        <span>
          {helperText}
        </span>
      )}
    </span>
    {children}
  </label>
);

InputLabel.defaultProps = {
  className: null,
  error: false,
  helperText: null,
};

InputLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputLabel;
