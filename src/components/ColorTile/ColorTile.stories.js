import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { color, text, boolean } from "@storybook/addon-knobs";

import ColorTile from "./ColorTile";

storiesOf("Components", module).add("Color Tile", () => {
  return (
    <Fragment>
      <ColorTile
        color={color("Color", "#000000")}
        name={text("name")}
        hideName={boolean("hideName", true)}
      />
    </Fragment>
  );
});
