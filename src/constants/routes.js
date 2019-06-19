import Variant from "../pages/Variant/VariantMode";
import Palette from "../pages/Palette/PaletteMode";
import Accessibility from "../pages/Accessibility/AccessibilityMode";

export const VARIANT_ROUTE = {
  path: "/variant",
  component: Variant,
  name: "Variant Mode"
};

export const PALETTE_ROUTE = {
  path: "/palette",
  component: Palette,
  name: "Palette Mode"
};

export const ACCESSIBILITY_ROUTE = {
  path: "/accessibility",
  component: Accessibility,
  name: "Accessibility Mode"
};

export const ALL_ROUTES = [VARIANT_ROUTE, PALETTE_ROUTE, ACCESSIBILITY_ROUTE];
