import cx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef, useRef, useState } from 'react';

import styles from './NumberStepper.module.scss';

const NumberStepper = forwardRef(({
  changeAction,
  className,
  defaultValue,
  error,
  id,
  inputClassName,
  maxQuantity,
  setError,
}, fRef) => {
  const ref = fRef || useRef();
  const quantityEl = ref;
  const [thisError, setThisError] = useState(false);

  const errorSetter = setError || setThisError;

  const getInputValue = () => {
    errorSetter(false);

    let inputValue = Number(ref.current.value);
    if (Number.isNaN(inputValue) || inputValue < 0) {
      inputValue = 0;
    }
    return inputValue;
  };

  const stepUp = () => {
    const inputValue = getInputValue();
    if (inputValue < maxQuantity) {
      const valuePlusOne = getInputValue() + 1;
      quantityEl.current.value = valuePlusOne;
      changeAction(valuePlusOne);
    }
  };

  const stepDown = () => {
    const inputValue = getInputValue();
    const valueMinusOne = inputValue === 0 ? 1 : inputValue - 1;
    if (valueMinusOne > 0) {
      quantityEl.current.value = valueMinusOne;
      changeAction(valueMinusOne);
    }
  };

  const handleBlur = () => {
    const inputValue = getInputValue();
    errorSetter(inputValue === 0);
    if (inputValue > 0) {
      changeAction(inputValue);
    }
  };

  return (
    <div
      className={cx(
        'type-form-control',
        styles.container,
        (error || thisError) && styles.error,
        className,
      )}
    >
      <button onClick={stepDown} type="button">-</button>
      <label htmlFor={id}>
        <span aria-hidden="true">Quantity</span>
        <input
          className={cx(styles.input, inputClassName)}
          data-error={error}
          defaultValue={defaultValue}
          id={id}
          maxLength={String(maxQuantity).length}
          onBlur={handleBlur}
          ref={ref}
          type="text"
        />
      </label>
      <button onClick={stepUp} type="button">+</button>
    </div>
  );
});

NumberStepper.defaultProps = {
  changeAction: () => {},
  className: null,
  defaultValue: 1,
  error: false,
  inputClassName: null,
  maxQuantity: 99,
  setError: null,
};

NumberStepper.propTypes = {
  changeAction: PropTypes.func,
  className: PropTypes.string,
  defaultValue: PropTypes.number,
  error: PropTypes.bool,
  id: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  maxQuantity: PropTypes.number,
  setError: PropTypes.func,
};

export default NumberStepper;
