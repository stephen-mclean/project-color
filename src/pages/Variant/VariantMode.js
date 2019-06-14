import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPicker from "../../components/ColorPicker/ColorPicker";

import styles from "./VariantMode.module.scss";

const VariantMode = () => {
  const { palette, updateBaseColor } = useContext(PaletteContext);

  const onBaseColorChange = (color, hex) => {
    console.log("color change for", color);
    console.log("new hex", hex);

    const newColor = {
      ...color
    };
    newColor.base.color = hex;

    updateBaseColor(newColor);
  };

  const tabs = palette.colors.map(color => <Tab>{color.name}</Tab>);
  const panels = palette.colors.map(color => (
    <TabPanel>
      <div className={styles.pickerContainer}>
        <ColorPicker
          color={color.base.color}
          onChange={hex => onBaseColorChange(color, hex)}
        />
      </div>
    </TabPanel>
  ));

  return (
    <Tabs>
      <TabList>{tabs}</TabList>

      {panels}
    </Tabs>
  );
};

export default VariantMode;
