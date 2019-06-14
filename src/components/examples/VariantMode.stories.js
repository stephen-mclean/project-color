import React from "react";
import { storiesOf } from "@storybook/react";
import PaletteProvider from "../PaletteProvider/PaletteProvider";
import VariantMode from "../../pages/Variant/VariantMode";

storiesOf("Examples", module).add("Variant Mode", () => {
  return (
    <PaletteProvider>
      <VariantMode />
    </PaletteProvider>
  );
});
