import Variant from "../pages/Variant/VariantMode";
import Palette from "../pages/Palette/PaletteMode";
import Accessibility from "../pages/Accessibility/AccessibilityMode";
import About from "../pages/About/About";
import { VARIANT_MODE, PALETTE_MODE } from "./modes";

export const VARIANT_ROUTE = {
  path: "/variant",
  component: Variant,
  name: "Variant",
  description:
    "Choose variants from your base colors. Then add them to your palette.",
  showInNav: true,
  mode: VARIANT_MODE
};

export const PALETTE_ROUTE = {
  path: "/palette",
  component: Palette,
  name: "Palette",
  description:
    "View your color palette. Choose color pairs to check accessibility.",
  showInNav: true,
  mode: PALETTE_MODE
};

export const ACCESSIBILITY_ROUTE = {
  path: "/accessibility",
  component: Accessibility,
  name: "Accessibility",
  description: "Ensure your chosen color pairs are accessible.",
  showInNav: true
};

export const ABOUT_ROUTE = {
  path: "/about",
  component: About,
  name: "About",
  showInNav: false
};

export const ALL_ROUTES = [
  VARIANT_ROUTE,
  PALETTE_ROUTE,
  ACCESSIBILITY_ROUTE,
  ABOUT_ROUTE
];
