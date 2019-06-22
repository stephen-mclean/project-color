import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import tinycolor from "tinycolor2";
import styles from "./ColorTile.module.scss";

const TILE_SIZES = {
  sm: "2.5rem",
  md: "4rem",
  lg: "6rem"
};

const ColorTile = ({
  color,
  name,
  hideName,
  hideHex,
  size,
  className,
  customTileStyle,
  ...otherProps
}) => {
  const containerClass = cx(styles.container, className);

  const tileClass = cx(styles.tile, {
    "margin-bottom--xxs": !hideName || !hideHex
  });
  const dimension = TILE_SIZES[size];
  const tileStyle = {
    "--color-tile-width": dimension,
    "--color-tile-height": dimension,
    "--color-tile-bg": color,
    "--color-tile-border-color": "transparent",
    ...customTileStyle
  };
  const tile = <div style={tileStyle} className={tileClass} />;

  const nameClass = cx("text--colors-grey-lighten-30", {
    "margin-bottom--xxs": !hideHex
  });

  const hex = useMemo(() => tinycolor(color).toHexString(), [color]);
  return (
    <div className={containerClass} {...otherProps}>
      {tile}
      {!hideName && <small className={nameClass}>{name}</small>}
      {!hideHex && (
        <small className="text--colors-grey-lighten-30">{hex}</small>
      )}
    </div>
  );
};

ColorTile.propTypes = {
  /**
   * Color to display
   */
  color: PropTypes.string.isRequired,
  /**
   * Name of the color
   */
  name: PropTypes.string,
  /**
   * Hide the name text if true
   */
  hideName: PropTypes.bool,
  /**
   * Hide the hex color value display if true
   */
  hideHex: PropTypes.bool,
  /**
   * Size of the tile
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * Custom styles to apply to the tile element
   */
  customTileStyle: PropTypes.object
};

ColorTile.defaultProps = {
  size: "md",
  hideName: true,
  hideHex: true,
  customTileStyle: {}
};

export default ColorTile;
