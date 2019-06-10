import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ChromePicker } from "react-color";
import tinycolor from "tinycolor2";
import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ color, onChange, swatchClassName }) => {
  const [isPickerOpen, setPickerOpen] = useState(false);

  const onSwatchClick = () => {
    setPickerOpen(!isPickerOpen);
  };

  const onColorChange = color => {
    onChange(color.hex);
  };

  const colorDisplayName = useMemo(() => tinycolor(color).toHexString(), [
    color
  ]);

  const swatchStyle = {
    "--swatch-bg": color
  };
  const swatchClass = cx(styles.swatch, "margin-right", swatchClassName);

  return (
    <div>
      <div className={styles.swatchContainer}>
        <div
          style={swatchStyle}
          className={swatchClass}
          onClick={onSwatchClick}
        />
        <span className="text--colors-grey-base text-sm">
          {colorDisplayName}
        </span>
      </div>
      {isPickerOpen && (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={onSwatchClick} />
          <ChromePicker color={color} onChange={onColorChange} />
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
   * Custom classes to apply to the swatch
   */
  swatchClassName: PropTypes.string
};

ColorPicker.defaultProps = {
  onChange: () => {}
};

export default ColorPicker;
