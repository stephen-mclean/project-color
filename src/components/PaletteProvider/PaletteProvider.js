import React, { createContext, useState, useMemo } from "react";
import tinycolor from "tinycolor2";
import uuid from "uuid";
import { withRouter } from "react-router-dom";

import { ALL_ROUTES } from "../../constants";

export const PaletteContext = createContext();

const PaletteProvider = ({ children, location }) => {
  const defaultBaseColorID = uuid();
  const defaultBaseColorBaseID = uuid();
  const [palette, setPalette] = useState({
    colors: [
      {
        name: "color-one",
        id: defaultBaseColorID,
        base: {
          name: "base",
          id: defaultBaseColorBaseID,
          color: tinycolor.random().toHexString(),
          isMain: true
        },
        variants: []
      }
    ],
    pairs: [],
    currentSelectedColor: defaultBaseColorID
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

    if (palette.currentSelectedColor === color.id) {
      newPalette.currentSelectedColor = palette.colors[colorIdx - 1].id;
    }

    newPalette.colors.splice(colorIdx, 1);
    setPalette(newPalette);
  };

  const addVariantToBaseColor = (variant, baseColor) => {
    const updatedColor = { ...baseColor };

    const variantIdx = updatedColor.variants.findIndex(
      v => v.name === variant.name
    );

    if (variantIdx === -1) {
      updatedColor.variants.push(variant);
      updateBaseColor(updatedColor);
    }
  };

  const isVariantPresent = (baseColor, variantId) => {
    return baseColor.variants.find(v => v.id === variantId);
  };

  const addColorPair = (background, foreground) => {
    const pair = {
      id: uuid(),
      bg: background.id,
      fg: foreground.id
    };

    const backgroundBaseColor = palette.colors.find(
      c => c.id === background.baseColorId
    );
    if (!isVariantPresent(backgroundBaseColor, background.id)) {
      addVariantToBaseColor(background, backgroundBaseColor);
    }

    const foregroundBaseColor = palette.colors.find(
      c => c.id === foreground.baseColorId
    );
    if (!isVariantPresent(foregroundBaseColor, foreground.id)) {
      addVariantToBaseColor(foreground, foregroundBaseColor);
    }

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

  const setCurrentSelectedColor = id => {
    const newPalette = { ...palette };
    newPalette.currentSelectedColor = id;

    console.log("palette with new selected color", newPalette);
    setPalette(newPalette);
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
      currentMode,
      addVariantToBaseColor,
      setCurrentSelectedColor
    };
  };

  return (
    <PaletteContext.Provider value={getContextValue()}>
      {children}
    </PaletteContext.Provider>
  );
};

export default withRouter(PaletteProvider);
