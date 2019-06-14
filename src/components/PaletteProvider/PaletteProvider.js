import React, { createContext, useState } from "react";

const PaletteContext = createContext();

const PaletteProvider = ({ children }) => {
  const [palette, setPalette] = useState({
    colors: [
      {
        name: "color-one",
        base: {
          name: "color-one-base",
          color: "#000000"
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
