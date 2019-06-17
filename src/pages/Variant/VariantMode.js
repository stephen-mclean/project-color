import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import tinycolor from "tinycolor2";

import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import VariantGenerator from "../../components/VariantGenerator/VariantGenerator";

import styles from "./VariantMode.module.scss";

const VariantMode = () => {
  const { palette, updateBaseColor, addBaseColor } = useContext(PaletteContext);

  const onBaseColorChange = (color, hex) => {
    const newColor = {
      ...color
    };
    newColor.base.color = hex;

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
      v => v.id === variant.id
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
