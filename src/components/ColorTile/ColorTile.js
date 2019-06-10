import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
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
  size,
  className,
  ...otherProps
}) => {
  const tileClass = cx(styles.tile, "margin-bottom--xxs", className);
  const dimension = TILE_SIZES[size];
  const tileStyle = {
    "--color-tile-width": dimension,
    "--color-tile-height": dimension,
    "--color-tile-bg": color
  };

  const tile = <div style={tileStyle} className={tileClass} />;

  return (
    <div className={styles.container} {...otherProps}>
      {tile}
      {!hideName && (
        <small className="text--colors-grey-lighten-30">{name}</small>
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
   * Size of the tile
   */
  size: PropTypes.oneOf(["sm", "md", "lg"])
};

ColorTile.defaultProps = {
  size: "md",
  hideName: true
};

export default ColorTile;
