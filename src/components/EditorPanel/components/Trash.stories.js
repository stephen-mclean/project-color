import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { Trash } from "./Trash";

storiesOf("Editor Panel", module).add("Trash", () => {
  return <Trash canDrop={boolean("Toggle Drop State", false)} />;
});
