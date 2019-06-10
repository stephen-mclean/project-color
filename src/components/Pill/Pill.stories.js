import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import Pill from "./Pill";

storiesOf("Components", module).add("Pill", () => {
  return (
    <Pill type={select("type", ["default", "success", "error"])}>
      {text("text", "Pill")}
    </Pill>
  );
});
