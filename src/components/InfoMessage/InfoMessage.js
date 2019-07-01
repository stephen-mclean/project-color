import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./InfoMessage.module.scss";

const iconClass = cx(styles.icon, "margin-bottom--xxs");

const InfoMessage = ({ icon, message, ...rest }) => (
  <div className={styles.container} {...rest}>
    <FontAwesomeIcon icon={icon} className={iconClass} />
    <div>{message}</div>
  </div>
);

InfoMessage.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default InfoMessage;
