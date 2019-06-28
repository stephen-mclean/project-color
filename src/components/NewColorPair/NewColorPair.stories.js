import React from "react";
import { storiesOf } from "@storybook/react";
import { color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import NewColorPair from "./NewColorPair";

storiesOf("Components", module).add("New Color Pair", () => {
  return (
    <NewColorPair
      background={color("Background", "#000000")}
      foreground={color("Foreground", "#E5E5E5")}
      onExchange={action("New Color Pair -- Exchange")}
      onDismiss={action("New Color Pair -- Dismiss")}
      onAccept={action("New Color Pair -- Accept")}
    />
  );
});
