import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./ToggleSwitch.module.scss";

const ToggleSwitch = ({ label, value, onChange, className, ...rest }) => {
  const switchClass = cx(styles.switch, className);
  return (
    <label className={switchClass} {...rest}>
      <input type="checkbox" defaultChecked={value} onChange={onChange} />
      <span className={styles.slider} />
      {label}
    </label>
  );
};

ToggleSwitch.propTypes = {
  /**
   * The label for the switch
   */
  label: PropTypes.string.isRequired,
  /**
   * True if the switch is enabled, false otherwise
   */
  value: PropTypes.bool.isRequired,
  /**
   * Callback for when the switch value changes
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Custom class to apply to the switch
   */
  className: PropTypes.string
};

export default ToggleSwitch;
