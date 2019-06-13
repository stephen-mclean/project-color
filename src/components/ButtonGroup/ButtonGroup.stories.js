import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

storiesOf("Components", module).add("Button Group", () => {
  return (
    <ButtonGroup
      alignment={select("Alignment", ["left", "center", "right"], "center")}
    >
      <Button className="btn margin-right--xxs">First</Button>
      <Button className="btn margin-right--xxs">Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  );
});
