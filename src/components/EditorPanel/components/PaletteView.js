import React from "react";
import PropTypes from "prop-types";

import ColorList from "../../ColorPaletteList/ColorPaletteList";
import InfoMessage from "../../InfoMessage/InfoMessage";

const PaletteView = ({ colors }) => {
  return colors && colors.length ? (
    <ColorList colors={colors} />
  ) : (
    <InfoMessage icon="box" message="Drag colors here to add to your palette" />
  );
};

PaletteView.propTypes = {
  /**
   * List of colors to display
   */
  colors: PropTypes.array.isRequired
};

export default PaletteView;
