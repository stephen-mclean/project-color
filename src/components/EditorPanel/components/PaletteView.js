import React from "react";
import PropTypes from "prop-types";

import ColorList from "../../ColorPaletteList/ColorPaletteList";
import InfoMessage from "../../InfoMessage/InfoMessage";
import DraggableColorTile from "../../ColorTile/DraggableColorTile";

import { EDITOR_PANEL_VARIANT } from "../../../constants";

const renderTile = (color, className, onClick, hideName, hideHex) => (
  <DraggableColorTile
    dragItem={{ ...color, type: EDITOR_PANEL_VARIANT }}
    key={color.name}
    color={color.color}
    name={color.name}
    size={color.isMain ? "lg" : "md"}
    className={className}
    onClick={onClick}
    hideName={hideName}
    hideHex={hideHex}
  />
);

const PaletteView = ({ colors }) => {
  return colors && colors.length ? (
    <ColorList colors={colors} renderTileBy={renderTile} direction="row" />
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
