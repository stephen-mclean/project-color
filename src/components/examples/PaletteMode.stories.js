import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import PaletteProvider from "../PaletteProvider/PaletteProvider";
import PaletteMode from "../../pages/Palette/PaletteMode";
import VariantMode from "../../pages/Variant/VariantMode";

storiesOf("Examples", module).add("Palette Mode", () => {
  const mode = select("Mode", ["variant", "palette"], "palette");
  return (
    <PaletteProvider>
      {mode === "variant" && <VariantMode />}
      {mode === "palette" && <PaletteMode />}
    </PaletteProvider>
  );
});
