import Main from "../pages/Main/Main";
import About from "../pages/About/About";

export const MAIN_ROUTE = {
  path: "/main",
  name: "Main",
  component: Main
};

export const ABOUT_ROUTE = {
  path: "/about",
  component: About,
  name: "About"
};

export const ALL_ROUTES = [MAIN_ROUTE, ABOUT_ROUTE];
