import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
