import React, { useContext, useState, useEffect, useMemo } from "react";
import cx from "classnames";

import { PaletteContext } from "../PaletteProvider/PaletteProvider";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import { VARIANT_MODE, PALETTE_MODE } from "../../constants";

import styles from "./EditorPanel.module.scss";
import PaletteView from "./components/PaletteView";
import PairsView from "./components/PairsView";

const PALETTE_VIEW = "palette_view";
const PAIRS_VIEW = "pairs_view";

const EditorPanel = () => {
  const { currentMode, palette, flatColors } = useContext(PaletteContext);
  const { pairs } = palette;

  const mappedPairs = useMemo(() => {
    return pairs.map(pair => {
      return {
        id: pair.id,
        background: flatColors.find(c => c.id === pair.bg),
        foreground: flatColors.find(c => c.id === pair.fg)
      };
    });
  }, [pairs, flatColors]);

  useEffect(() => {
    if (currentMode === PALETTE_MODE) {
      setCurrentView(PAIRS_VIEW);
    }
  }, [currentMode]);

  const [currentView, setCurrentView] = useState(
    currentMode === VARIANT_MODE ? PALETTE_VIEW : PAIRS_VIEW
  );

  const renderViewSwitcher = () => {
    const paletteClassName = cx("btn btn--link", {
      "btn--active": currentView === PALETTE_VIEW
    });
    const pairsClassName = cx("btn btn--link", {
      "btn--active": currentView === PAIRS_VIEW
    });
    return (
      <ButtonGroup className="margin-bottom">
        {currentMode !== PALETTE_MODE && (
          <Button
            className={paletteClassName}
            onClick={() => setCurrentView(PALETTE_VIEW)}
          >
            Palette
          </Button>
        )}
        <Button
          className={pairsClassName}
          onClick={() => setCurrentView(PAIRS_VIEW)}
        >
          Pairs
        </Button>
      </ButtonGroup>
    );
  };

  const renderCurrentView = () => {
    const currentColor = palette.colors.find(
      c => c.id === palette.currentSelectedColor
    );
    return (
      <div>
        {currentView === PALETTE_VIEW && (
          <PaletteView colors={[currentColor.base, ...currentColor.variants]} />
        )}
        {currentView === PAIRS_VIEW && <PairsView pairs={mappedPairs} />}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderViewSwitcher()} {renderCurrentView()}
    </div>
  );
};

export default EditorPanel;
