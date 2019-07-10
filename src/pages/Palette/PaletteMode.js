import React, { useContext } from "react";

import styles from "./PaletteMode.module.scss";
import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPaletteList from "../../components/ColorPaletteList/ColorPaletteList";
import DraggableColorTile from "../../components/ColorTile/DraggableColorTile";
import { COLOR_TILE } from "../../constants";

const renderTile = (color, className, onClick, hideName, hideHex) => (
  <DraggableColorTile
    dragItem={{ ...color, type: COLOR_TILE }}
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

const PaletteMode = () => {
  const { palette } = useContext(PaletteContext);

  return (
    <div className={styles.container}>
      {palette.colors.map(color => {
        const allColors = [color.base, ...color.variants];

        return (
          <ColorPaletteList
            name={color.name}
            colors={allColors}
            className="margin-right--xs"
            renderTileBy={renderTile}
          />
        );
      })}
    </div>
  );
};

export default PaletteMode;
