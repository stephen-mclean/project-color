import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

import ColorTile from "../ColorTile/ColorTile";

import styles from "./ColorPicker.module.scss";

const ColorPicker = ({
  color,
  onChange,
  className,
  tileClassName,
  renderTile
}) => {
  const [isPickerOpen, setPickerOpen] = useState(false);

  const onSwatchClick = () => {
    setPickerOpen(!isPickerOpen);
  };

  const onColorChange = color => {
    onChange(color.hex);
  };

  return (
    <div className={className}>
      {renderTile(color, onSwatchClick, false, "lg", tileClassName)}

      {isPickerOpen && (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={onSwatchClick} />
          <ChromePicker color={color} onChangeComplete={onColorChange} />
        </div>
      )}
    </div>
  );
};

ColorPicker.propTypes = {
  /**
   * Currently selected color value
   */
  color: PropTypes.string,
  /**
   * Callback fn for when the color changes
   */
  onChange: PropTypes.func,
  /**
   * Custom classes to apply to the color tile
   */
  tileClassName: PropTypes.string,
  /**
   * Render prop to custom render the swatch tile
   */
  renderTile: PropTypes.func
};

ColorPicker.defaultProps = {
  onChange: () => {},
  renderTile: (color, onClick, hideHex, size, className) => (
    <ColorTile
      color={color}
      onClick={onClick}
      hideHex={hideHex}
      size={size}
      className={className}
    />
  )
};

export default ColorPicker;
