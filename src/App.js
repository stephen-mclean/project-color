import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ALL_ROUTES, VARIANT_ROUTE } from "./constants";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ModeSwitcher from "./components/ModeSwitcher/ModeSwitcher";
import PaletteProvider from "./components/PaletteProvider/PaletteProvider";
import EditorPanel from "./components/EditorPanel/EditorPanel";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <PaletteProvider>
        <div className={styles.appContainer}>
          <Nav />

          <div className={styles.container}>
            <ModeSwitcher className="margin-bottom--lg" />
            <Switch>
              {ALL_ROUTES.map(route => (
                <Route
                  key={route.name}
                  path={route.path}
                  component={route.component}
                />
              ))}
              <Redirect from="/" to={VARIANT_ROUTE.path} />
            </Switch>
          </div>

          <EditorPanel />

          <Footer />
        </div>
      </PaletteProvider>
    </Router>
  );
}

export default App;
