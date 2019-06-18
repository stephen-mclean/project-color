import React, { useContext, useState } from "react";
import tinycolor from "tinycolor2";

import styles from "./PaletteMode.module.scss";
import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPaletteList from "../../components/ColorPaletteList/ColorPaletteList";
import ColorTile from "../../components/ColorTile/ColorTile";
import Button from "../../components/Button/Button";

const PaletteMode = () => {
  const { palette, addColorPair } = useContext(PaletteContext);
  const [selectedColors, setSelectedColors] = useState([]);

  const onColorClick = color => {
    const idx = selectedColors.findIndex(c => c.id === color.id);
    const newSelectedColors = [...selectedColors];
    if (idx > -1) {
      newSelectedColors.splice(idx, 1);
    } else {
      newSelectedColors.push(color);
    }

    setSelectedColors(newSelectedColors);
  };

  const getCustomTileStyle = color => {
    const idx = selectedColors.findIndex(c => c.id === color.id);
    if (idx > -1) {
      let variantComplement = tinycolor(color.color)
        .complement()
        .toHexString();

      variantComplement = tinycolor
        .mostReadable(color.color, [variantComplement], {
          includeFallbackColors: true,
          level: "AAA",
          size: "large"
        })
        .toHexString();

      return {
        "--color-tile-border-color": variantComplement
      };
    }

    return {};
  };

  const addNewPair = () => {
    addColorPair(selectedColors[0], selectedColors[1]);
    setSelectedColors([]);
  };

  return (
    <div>
      {selectedColors.length === 2 && (
        <div className={styles.toolbar}>
          <ColorTile
            color={selectedColors[0].color}
            size="sm"
            className="margin-right--xxs"
          />
          <ColorTile
            color={selectedColors[1].color}
            size="sm"
            className="margin-right--xxs"
          />
          <Button
            className="btn btn--primary btn--outline"
            onClick={addNewPair}
          >
            Add Pair
          </Button>
        </div>
      )}
      <div className={styles.container}>
        {palette.colors.map(color => {
          const allColors = [color.base, ...color.variants];

          return (
            <ColorPaletteList
              name={color.name}
              colors={allColors}
              className="margin-right--xs"
              onColorClick={onColorClick}
              getCustomTileStyle={getCustomTileStyle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaletteMode;
