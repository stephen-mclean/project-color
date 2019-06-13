import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./ButtonGroup.module.scss";

const LEFT_ALIGN = "left";
const RIGHT_ALIGN = "right";
const CENTER_ALIGN = "center";
const ALL_ALIGNMENTS = [LEFT_ALIGN, CENTER_ALIGN, RIGHT_ALIGN];

const ButtonGroup = ({ alignment, children, className, ...otherProps }) => {
  const containerClass = cx(
    styles.container,
    {
      [styles.left]: alignment === LEFT_ALIGN,
      [styles.center]: alignment === CENTER_ALIGN,
      [styles.right]: alignment === RIGHT_ALIGN
    },
    className
  );

  return (
    <div className={containerClass} {...otherProps}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  /**
   * Determines how the buttons should be aligned
   */
  alignment: PropTypes.oneOf(ALL_ALIGNMENTS)
};

ButtonGroup.defaultProps = {
  alignment: CENTER_ALIGN
};

export default ButtonGroup;
