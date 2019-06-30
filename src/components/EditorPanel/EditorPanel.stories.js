import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import PaletteProvider from "../PaletteProvider/PaletteProvider";
import EditorPanel from "./EditorPanel";

storiesOf("Examples", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/variant"]}>{story()}</MemoryRouter>
  ))
  .add("Editor Panel", () => {
    return (
      <PaletteProvider>
        <EditorPanel />
      </PaletteProvider>
    );
  });
