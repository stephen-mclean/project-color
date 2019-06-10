import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";

import ColorPicker from "./ColorPicker";

const store = new Store({
  color: "#000000"
});

storiesOf("Components", module).add("Color Picker", () => {
  return (
    <State store={store}>
      {state => [
        <ColorPicker
          color={state.color}
          onChange={color => store.set({ color })}
        />
      ]}
    </State>
  );
});
