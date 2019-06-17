import React from "react";
import { storiesOf } from "@storybook/react";
import { color, number } from "@storybook/addon-knobs";

import VariantGenerator from "./VariantGenerator";

storiesOf("Components", module).add("Variant Generator", () => {
  return (
    <VariantGenerator
      color={color("Color", "#E5E5E5")}
      interval={number("Interval", 5)}
    />
  );
});
