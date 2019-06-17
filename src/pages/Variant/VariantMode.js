import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import tinycolor from "tinycolor2";

import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import VariantGenerator from "../../components/VariantGenerator/VariantGenerator";

import { VARIANT_TYPES } from "../../constants";

import styles from "./VariantMode.module.scss";

const VariantMode = () => {
  const { palette, updateBaseColor, addBaseColor } = useContext(PaletteContext);

  const getUpdatedVariants = (hex, oldVariants) => {
    const base = tinycolor(hex);
    return oldVariants.map(variant => {
      let updatedColor;
      switch (variant.type) {
        case VARIANT_TYPES.lighten:
          updatedColor = base.lighten(variant.interval).toHexString();
          break;
        case VARIANT_TYPES.darken:
          updatedColor = base.darken(variant.interval).toHexString();
          break;
        case VARIANT_TYPES.desaturate:
          updatedColor = base.desaturate(variant.interval).toHexString();
          break;
        case VARIANT_TYPES.saturate:
          updatedColor = base.saturate(variant.interval).toHexString();
          break;
        default:
          console.warning("unable to update variant", variant);
      }

      return {
        ...variant,
        color: updatedColor
      };
    });
  };

  const onBaseColorChange = (color, hex) => {
    const newColor = {
      ...color
    };
    newColor.base.color = hex;
    newColor.variants = getUpdatedVariants(hex, newColor.variants);

    updateBaseColor(newColor);
  };

  const onTabSelect = index => {
    if (index === tabs.length - 1) {
      addBaseColor();
    }

    return true;
  };

  const toggleVariant = (baseColor, variant) => {
    const updatedColor = { ...baseColor };
    const variantIdx = updatedColor.variants.findIndex(
      v => v.name === variant.name
    );

    if (variantIdx > -1) {
      updatedColor.variants.splice(variantIdx, 1);
    } else {
      updatedColor.variants.push(variant);
    }

    updateBaseColor(updatedColor);
  };

  const addVariantAsBase = variant => {
    addBaseColor(variant.color);
  };

  /**
   * Return custom styles for a variant in the list.
   */
  const getCustomVariantStyles = (baseColor, variant) => {
    const foundVariantIdx = baseColor.variants.findIndex(
      v => v.name === variant.name
    );
    if (foundVariantIdx > -1) {
      let variantComplement = tinycolor(variant.color)
        .complement()
        .toHexString();

      variantComplement = tinycolor
        .mostReadable(variant.color, [variantComplement], {
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

  const tabs = palette.colors.map(color => <Tab>{color.name}</Tab>);
  tabs.push(<Tab>Add Color</Tab>);

  const panels = palette.colors.map(color => (
    <TabPanel>
      <div className={styles.pickerContainer}>
        <ColorPicker
          color={color.base.color}
          onChange={hex => onBaseColorChange(color, hex)}
          containerClassName="margin-bottom--xs"
        />
      </div>

      <VariantGenerator
        color={color.base.color}
        onVariantClick={variant => toggleVariant(color, variant)}
        onVariantDoubleClick={addVariantAsBase}
        getCustomVariantStyles={variant =>
          getCustomVariantStyles(color, variant)
        }
      />
    </TabPanel>
  ));

  return (
    <Tabs onSelect={onTabSelect}>
      <TabList>{tabs}</TabList>

      {panels}
    </Tabs>
  );
};

export default VariantMode;
