import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";

import "../src/fontawesome/initFaIcons";
import "../src/index.scss";

addDecorator(
  withInfo({
    inline: true
  })
);
addDecorator(withKnobs);
addDecorator(withA11y);

configure(() => {
  const req = require.context("../src/components", true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}, module);
