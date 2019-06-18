import React from "react";
import { storiesOf } from "@storybook/react";
import { color, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import AccessiblePair from "./AccessiblePair";

storiesOf("Components", module).add("Accessible Pair", () => {
  return (
    <AccessiblePair
      background={{
        color: color("Background", "#000000"),
        name: "color-one-base"
      }}
      foreground={{
        color: color("Foreground", "#E5E5E5"),
        name: "color-two-base"
      }}
      hideCloseBtn={boolean("Hide Close Button", true)}
      onCloseBtnClick={action("Close Button Clicked")}
    />
  );
});
