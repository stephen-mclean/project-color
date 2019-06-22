import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

import ColorTile from "../ColorTile/ColorTile";

import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ color, onChange, className, tileClassName }) => {
  const [isPickerOpen, setPickerOpen] = useState(false);

  const onSwatchClick = () => {
    setPickerOpen(!isPickerOpen);
  };

  const onColorChange = color => {
    onChange(color.hex);
  };

  return (
    <div className={className}>
      <ColorTile
        color={color}
        onClick={onSwatchClick}
        hideHex={false}
        size="lg"
        className={tileClassName}
      />

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
  tileClassName: PropTypes.string
};

ColorPicker.defaultProps = {
  onChange: () => {}
};

export default ColorPicker;
