import React, { createContext, useState } from "react";
import tinycolor from "tinycolor2";
import uuid from "uuid";

export const PaletteContext = createContext();

const PaletteProvider = ({ children }) => {
  const [palette, setPalette] = useState({
    colors: [
      {
        name: "color-one",
        id: uuid(),
        base: {
          name: "color-one-base",
          color: tinycolor.random().toHexString()
        },
        variants: []
      }
    ]
  });

  const addBaseColor = hex => {
    const newColor = {
      name: "new-color",
      id: uuid(),
      base: {
        name: "new-color-base",
        color: hex || tinycolor.random().toHexString()
      },
      variants: []
    };

    const newPalette = { ...palette };
    newPalette.colors.push(newColor);

    setPalette(newPalette);
  };

  const updateBaseColor = color => {
    console.log("update base color", color);
    const colorIdx = palette.colors.findIndex(c => color.id === c.id);

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
