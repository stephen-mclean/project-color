import React, { useContext, Fragment } from "react";
import cx from "classnames";

import { VARIANT_MODE, PALETTE_MODE } from "../../constants";
import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import Variant from "../Variant/VariantMode";
import Palette from "../Palette/PaletteMode";
import PaletteExporter from "./components/PaletteExporter";

import styles from "./Main.module.scss";

const Main = () => {
  const { currentMode, setCurrentMode } = useContext(PaletteContext);
  const isPaletteMode = currentMode === PALETTE_MODE;

  const renderVariantMode = () => <Variant />;

  const renderPaletteMode = () => <Palette />;

  const toggleMode = () => {
    const newMode = isPaletteMode ? VARIANT_MODE : PALETTE_MODE;
    setCurrentMode(newMode);
  };

  const actionsContainerClass = cx(
    styles.actionsContainer,
    "margin-bottom--lg"
  );

  return (
    <Fragment>
      <div className={actionsContainerClass}>
        <ToggleSwitch
          value={isPaletteMode}
          onChange={toggleMode}
          label="Show entire palette"
          className="margin-right"
        />
        <PaletteExporter />
      </div>

      {!isPaletteMode && renderVariantMode()}
      {isPaletteMode && renderPaletteMode()}
    </Fragment>
  );
};

export default Main;
