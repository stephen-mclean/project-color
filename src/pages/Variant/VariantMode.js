import React, { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tinycolor from "tinycolor2";
import cx from "classnames";

import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import Input from "../../components/Input/Input";
import VariantGenerator from "../../components/VariantGenerator/VariantGenerator";

import { VARIANT_TYPES } from "../../constants";

import styles from "./VariantMode.module.scss";

const VariantMode = () => {
  const {
    palette,
    updateBaseColor,
    addBaseColor,
    removeBaseColor
  } = useContext(PaletteContext);

  const [tabIndex, setTabIndex] = useState(0);

  const getUpdatedVariants = (hex, oldVariants) => {
    const base = tinycolor(hex);
    return oldVariants.map(variant => {
      let updatedColor;
      switch (variant.variantType) {
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
          console.warn("unable to update variant", variant);
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

  const onBaseColorNameChange = (color, name) => {
    const newColor = {
      ...color
    };
    newColor.name = name;

    updateBaseColor(newColor);
  };

  const onTabSelect = index => {
    if (index === tabs.length - 1) {
      addBaseColor();
    }

    setTabIndex(index);

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

  const shouldShowCloseBtn = palette.colors.length > 1;
  const tabClass = cx(styles.colorNameTabContainer, {
    "margin-right--xs": shouldShowCloseBtn
  });

  const tabs = palette.colors.map((color, index) => {
    const shouldShowTabInput = tabIndex === index;
    return (
      <Tab>
        <div className={tabClass}>
          {!shouldShowTabInput && color.name}
          {shouldShowTabInput && (
            <Input
              value={color.name}
              onChange={e => {
                onBaseColorNameChange(color, e.target.value);
              }}
            />
          )}
        </div>
        {shouldShowCloseBtn && (
          <FontAwesomeIcon
            icon="times"
            onClick={e => {
              e.stopPropagation();
              removeBaseColor(color);
            }}
          />
        )}
      </Tab>
    );
  });
  tabs.push(
    <Tab>
      <FontAwesomeIcon icon="plus" />
    </Tab>
  );

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
