import React from "react";
import { storiesOf } from "@storybook/react";

import AccessiblePair from "./AccessiblePair";

storiesOf("Components", module).add("Accessible Pair", () => {
  return (
    <AccessiblePair
      background={{ color: "#000000", name: "color-one-base" }}
      foreground={{ color: "#E5E5E5", name: "color-two-base" }}
    />
  );
});
