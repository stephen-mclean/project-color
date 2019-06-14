import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Input.module.scss";

const ROW_DIRECTION = "row";
const COL_DIRECTION = "col";
const ALL_DIRECTIONS = [ROW_DIRECTION, COL_DIRECTION];

const Input = ({
  direction,
  label,
  containerClassName,
  labelClassName,
  inputClassName,
  ...otherProps
}) => {
  const containerClass = cx(
    styles.container,
    {
      [styles.containerRow]: direction === ROW_DIRECTION,
      [styles.containerCol]: direction === COL_DIRECTION
    },
    containerClassName
  );
  const labelClass = cx(
    {
      "margin-right--xxs": direction === ROW_DIRECTION,
      "margin-bottom--xxs": direction === COL_DIRECTION
    },
    labelClassName
  );
  const inputClass = cx(styles.input, inputClassName);

  return (
    <div className={containerClass}>
      {label && <label className={labelClass}>{label}</label>}
      <input className={inputClass} {...otherProps} />
    </div>
  );
};

Input.propTypes = {
  /**
   * Layout of the content
   */
  direction: PropTypes.oneOf(ALL_DIRECTIONS),
  /**
   * Label for the input
   */
  label: PropTypes.string,
  /**
   * Custom classes to apply to the input
   */
  inputClassName: PropTypes.string,
  /**
   * Custom classes to apply to the container
   */
  containerClassName: PropTypes.string,
  /**
   * Custom classes to apply to the label
   */
  labelClassName: PropTypes.string
};

Input.defaultProps = {
  direction: COL_DIRECTION
};

export default Input;
