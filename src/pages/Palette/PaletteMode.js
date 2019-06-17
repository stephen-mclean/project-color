import React, { useContext } from "react";

import styles from "./PaletteMode.module.scss";
import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPaletteList from "../../components/ColorPaletteList/ColorPaletteList";

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
          />
        );
      })}
    </div>
  );
};

export default PaletteMode;
