import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { color, text, boolean } from "@storybook/addon-knobs";

import ColorTile from "./ColorTile";

storiesOf("Components", module).add("Color Tile", () => {
  return (
    <Fragment>
      <ColorTile
        color={color("Color", "#000000")}
        name={text("Name")}
        hideName={boolean("Hide Name", true)}
        hideHex={boolean("Hide HEX", true)}
      />
    </Fragment>
  );
});
