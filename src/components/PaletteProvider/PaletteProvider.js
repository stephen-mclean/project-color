import React, { createContext, useState } from "react";
import tinycolor from "tinycolor2";

export const PaletteContext = createContext();

const PaletteProvider = ({ children }) => {
  const [palette, setPalette] = useState({
    colors: [
      {
        name: "color-one",
        base: {
          name: "color-one-base",
          color: tinycolor.random().toHexString()
        },
        variants: []
      }
    ]
  });

  const addBaseColor = color => {
    console.log("add base", color);
  };

  const updateBaseColor = color => {
    console.log("update base", color);

    const colorIdx = palette.colors.findIndex(c => color.name === c.name);

    const newPalette = {
      ...palette
    };

    newPalette.colors.splice(colorIdx, 1, color);

    setPalette(newPalette);
  };

  const removeBaseColor = color => {
    console.log("remove base color", color);
  };

  const getContextValue = () => {
    return {
      palette,
      addBaseColor,
      updateBaseColor,
      removeBaseColor
    };
  };

  return (
    <PaletteContext.Provider value={getContextValue()}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteProvider;
