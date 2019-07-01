import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import InfoMessage from "./InfoMessage";

storiesOf("Components", module).add("Info Message", () => {
  return (
    <InfoMessage
      icon={text("Icon", "box")}
      message={text("Message", "This is the message")}
    />
  );
});
