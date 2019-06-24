import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import Footer from "./Footer";

storiesOf("Components", module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add("Footer", () => {
    return <Footer />;
  });
