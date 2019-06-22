import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Components", module).add("Button", () => {
  return (
    <Fragment>
      <Button className="btn">Default</Button>
      <Button className="btn btn--primary">Primary</Button>
      <Button className="btn btn--error">Danger</Button>
      <Button className="btn btn--outline">Outline</Button>
      <Button className="btn btn--link">Link</Button>
    </Fragment>
  );
});
