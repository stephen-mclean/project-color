import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import Input from "./Input";

storiesOf("Components", module).add("Input", () => {
  return (
    <Input
      type={select("Type", ["text", "number", "password"], "text")}
      placeholder={text("Placeholder", "Input")}
      label={text("Label")}
      direction={select("Direction", ["row", "col"], "col")}
    />
  );
});
