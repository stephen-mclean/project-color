import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Pill.module.scss";

const DEFAULT_TYPE = "default";
const SUCCESS_TYPE = "success";
const ERROR_TYPE = "error";
const ALL_TYPES = [DEFAULT_TYPE, SUCCESS_TYPE, ERROR_TYPE];

const Pill = ({ type, className, children, ...otherProps }) => {
  const { defaultPill, success, error } = styles;

  const pillClass = cx(
    styles.pill,
    {
      [defaultPill]: type === DEFAULT_TYPE,
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

Pill.defaultProps = {
  type: DEFAULT_TYPE
};

export default Pill;
