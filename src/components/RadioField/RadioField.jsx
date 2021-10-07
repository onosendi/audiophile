import cx from 'clsx';
import PropTypes from 'prop-types';

import styles from './RadioField.module.scss';

const RadioField = ({
  checked,
  id,
  label,
  name,
  value,
  ...props
}) => (
  <label
    className={cx('type-form-control', styles.label)}
    htmlFor={id}
  >
    <input
      defaultChecked={checked}
      className={cx(styles.input)}
      id={id}
      name={name}
      type="radio"
      value={value}
      {...props}
    />
    <span className={cx(styles.checkmark)} />
    <span>{label}</span>
  </label>
);

RadioField.defaultProps = {
  checked: false,
};

RadioField.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RadioField;
