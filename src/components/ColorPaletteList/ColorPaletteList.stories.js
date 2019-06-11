import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ColorPaletteList from "./ColorPaletteList";

storiesOf("Components", module).add("Color Palette List", () => {
  return (
    <ColorPaletteList
      name={text("name", "color-one")}
      colors={[
        { color: "#000000", name: "color-one-base", isMain: true },
        { color: "#E5E5E5", name: "color-one-secondary", isMain: false }
      ]}
      direction={select("direction", ["row", "col"], "col")}
      onColorClick={action("Color Clicked")}
    />
  );
});
