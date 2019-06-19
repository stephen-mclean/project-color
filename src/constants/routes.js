import Variant from "../pages/Variant/VariantMode";
import Palette from "../pages/Palette/PaletteMode";
import Accessibility from "../pages/Accessibility/AccessibilityMode";

export const VARIANT_ROUTE = {
  path: "/variant",
  component: Variant,
  name: "Variant",
  description:
    "Choose variants from your base colors. Then add them to your palette."
};

export const PALETTE_ROUTE = {
  path: "/palette",
  component: Palette,
  name: "Palette",
  description:
    "View your color palette. Choose color pairs to check accessibility."
};

export const ACCESSIBILITY_ROUTE = {
  path: "/accessibility",
  component: Accessibility,
  name: "Accessibility",
  description: "Ensure your chosen color pairs are accessible."
};

export const ALL_ROUTES = [VARIANT_ROUTE, PALETTE_ROUTE, ACCESSIBILITY_ROUTE];
