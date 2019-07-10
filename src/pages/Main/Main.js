import React, { useContext, Fragment } from "react";

import { VARIANT_MODE, PALETTE_MODE } from "../../constants";
import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import Variant from "../Variant/VariantMode";
import Palette from "../Palette/PaletteMode";

const Main = () => {
  const { currentMode, setCurrentMode } = useContext(PaletteContext);
  const isPaletteMode = currentMode === PALETTE_MODE;

  const renderVariantMode = () => <Variant />;

  const renderPaletteMode = () => <Palette />;

  const toggleMode = () => {
    const newMode = isPaletteMode ? VARIANT_MODE : PALETTE_MODE;
    setCurrentMode(newMode);
  };

  return (
    <Fragment>
      <ToggleSwitch
        value={isPaletteMode}
        onChange={toggleMode}
        label="Show entire palette"
        className="margin-bottom--lg"
      />
      {!isPaletteMode && renderVariantMode()}
      {isPaletteMode && renderPaletteMode()}
    </Fragment>
  );
};

export default Main;
