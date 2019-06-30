import React, { createContext, useState, useMemo } from "react";
import tinycolor from "tinycolor2";
import uuid from "uuid";
import { withRouter } from "react-router-dom";

import { ALL_ROUTES } from "../../constants";

export const PaletteContext = createContext();

const PaletteProvider = ({ children, location }) => {
  const [palette, setPalette] = useState({
    colors: [
      {
        name: "color-one",
        id: uuid(),
        base: {
          name: "base",
          id: uuid(),
          color: tinycolor.random().toHexString(),
          isMain: true
        },
        variants: []
      }
    ],
    pairs: []
  });

  const flatColors = useMemo(() => {
    return palette.colors.reduce(
      (acc, color) => [...acc, ...[color.base, ...color.variants]],
      []
    );
  }, [palette]);

  const currentMode = useMemo(() => {
    const currentRoute = ALL_ROUTES.find(r => r.path === location.pathname);
    return currentRoute ? currentRoute.mode : null;
  }, [location.pathname]);

  const addBaseColor = hex => {
    const newColor = {
      name: "new-color",
      id: uuid(),
      base: {
        name: "base",
        id: uuid(),
        color: hex || tinycolor.random().toHexString(),
        isMain: true
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

    const colorIdx = palette.colors.findIndex(c => color.id === c.id);

    const newPalette = {
      ...palette
    };

    newPalette.colors.splice(colorIdx, 1);
    setPalette(newPalette);
  };

  const addColorPair = (background, foreground) => {
    const pair = {
      id: uuid(),
      bg: background.id,
      fg: foreground.id
    };

    const newPalette = { ...palette };
    newPalette.pairs.push(pair);

    console.log("new palette with pair", newPalette);

    setPalette(newPalette);
  };

  const removeColorPair = pair => {
    const idx = palette.pairs.findIndex(p => p.id === pair.id);
    if (idx > -1) {
      const newPalette = { ...palette };
      newPalette.pairs.splice(idx, 1);

      console.log("new palette without pair", newPalette);
      setPalette(newPalette);
    }
  };

  const getContextValue = () => {
    return {
      palette,
      addBaseColor,
      updateBaseColor,
      removeBaseColor,
      addColorPair,
      removeColorPair,
      flatColors,
      currentMode
    };
  };

  return (
    <PaletteContext.Provider value={getContextValue()}>
      {children}
    </PaletteContext.Provider>
  );
};

export default withRouter(PaletteProvider);
