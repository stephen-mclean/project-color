import React from "react";
import { storiesOf } from "@storybook/react";
import { StateDecorator, Store } from "@sambego/storybook-state";
import { text } from "@storybook/addon-knobs";

import ToggleSwitch from "./ToggleSwitch";

const store = new Store({
  enabled: false
});

storiesOf("Components", module)
  .addDecorator(StateDecorator(store))
  .add("Toggle Switch", () => {
    return (
      <ToggleSwitch
        value={store.get("enabled")}
        onChange={e => store.set({ enabled: e.target.checked })}
        label={text("Label", "Label")}
      />
    );
  });
