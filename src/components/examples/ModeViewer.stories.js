import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import PaletteProvider from "../PaletteProvider/PaletteProvider";
import PaletteMode from "../../pages/Palette/PaletteMode";
import VariantMode from "../../pages/Variant/VariantMode";
import AccessibilityMode from "../../pages/Accessibility/AccessibilityMode";

storiesOf("Examples", module).add("Mode Viewer", () => {
  const mode = select(
    "Mode",
    ["variant", "palette", "accessibility"],
    "variant"
  );
  return (
    <PaletteProvider>
      {mode === "variant" && <VariantMode />}
      {mode === "palette" && <PaletteMode />}
      {mode === "accessibility" && <AccessibilityMode />}
    </PaletteProvider>
  );
});
