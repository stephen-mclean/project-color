import React from "react";
import { storiesOf } from "@storybook/react";
import { StateDecorator, Store } from "@sambego/storybook-state";

import ColorPicker from "./ColorPicker";

const store = new Store({
  color: "#000000"
});

storiesOf("Components", module)
  .addDecorator(StateDecorator(store))
  .add("Color Picker", () => {
    return (
      <ColorPicker
        color={store.get("color")}
        onChange={color => store.set({ color })}
      />
    );
  });
