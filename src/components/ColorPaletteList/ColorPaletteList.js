import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./ColorPaletteList.module.scss";

import ColorTile from "../ColorTile/ColorTile";

const ROW_DIRECTION = "row";
const COL_DIRECTION = "col";
const ALL_DIRECTIONS = [ROW_DIRECTION, COL_DIRECTION];

/**
 * Renders a list of colors
 */
const ColorPaletteList = ({
  name,
  colors,
  direction,
  onColorClick,
  ...otherProps
}) => {
  const headingClass = cx("margin-bottom--xs", {
    "text--align-left": direction === ROW_DIRECTION,
    "text--align-center": direction === COL_DIRECTION
  });

  const containerClass = cx({
    [styles.containerCol]: direction === COL_DIRECTION,
    [styles.containerRow]: direction === ROW_DIRECTION
  });

  const tileClass = cx({
    "margin-bottom--xs": direction === COL_DIRECTION,
    "margin-right--xs": direction === ROW_DIRECTION
  });

  return (
    <div {...otherProps}>
      <h4 className={headingClass}>{name}</h4>
      <div className={containerClass}>
        {colors.map(color => (
          <ColorTile
            key={color.name}
            color={color.color}
            name={color.name}
            size={color.isMain || direction === ROW_DIRECTION ? "md" : "sm"}
            className={tileClass}
            onClick={() => onColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

ColorPaletteList.propTypes = {
  /**
   * Name of the list
   */
  name: PropTypes.string.isRequired,
  /**
   * The list of colors to display
   */
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.string,
      isMain: PropTypes.bool
    })
  ).isRequired,
  /**
   * Determines the layout of the tiles
   */
  direction: PropTypes.oneOf(ALL_DIRECTIONS),
  /**
   * Callback for when a color in the list is clicked
   */
  onColorClick: PropTypes.func
};

ColorPaletteList.defaultProps = {
  direction: COL_DIRECTION,
  onColorClick: () => {}
};

export default ColorPaletteList;
