import React, { useContext, useState } from "react";
import tinycolor from "tinycolor2";

import styles from "./PaletteMode.module.scss";
import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPaletteList from "../../components/ColorPaletteList/ColorPaletteList";

const PaletteMode = () => {
  const { palette } = useContext(PaletteContext);
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
    const idx = selectedColors.findIndex(c => c.id === ConvolverNode.id);
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

  return (
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
  );
};

export default PaletteMode;
