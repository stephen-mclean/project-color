import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Pill.module.scss";

const SUCCESS_TYPE = "success";
const ERROR_TYPE = "error";
const ALL_TYPES = [SUCCESS_TYPE, ERROR_TYPE];

const Pill = ({ type, className, children, ...otherProps }) => {
  const { success, error } = styles;

  const pillClass = cx(
    styles.pill,
    {
      [success]: type === SUCCESS_TYPE,
      [error]: type === ERROR_TYPE
    },
    className
  );

  return (
    <div className={pillClass} {...otherProps}>
      {children}
    </div>
  );
};

Pill.propTypes = {
  /**
   * Style of the pill
   */
  type: PropTypes.oneOf(ALL_TYPES),
  /**
   * Custom classes to add to the pill
   */
  className: PropTypes.string
};

export default Pill;
