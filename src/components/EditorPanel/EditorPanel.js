import React, { useContext, useState, useEffect, useMemo } from "react";
import { useDrop } from "react-dnd";
import cx from "classnames";

import { PaletteContext } from "../PaletteProvider/PaletteProvider";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import {
  VARIANT_MODE,
  PALETTE_MODE,
  COLOR_TILE,
  EDITOR_PANEL_VARIANT,
  EDITOR_PANEL_PAIR
} from "../../constants";

import styles from "./EditorPanel.module.scss";
import PaletteView from "./components/PaletteView";
import PairsView from "./components/PairsView";
import Trash from "./components/Trash";

const PALETTE_VIEW = "palette_view";
const PAIRS_VIEW = "pairs_view";

const EditorPanel = () => {
  const {
    currentMode,
    palette,
    flatColors,
    addVariantToBaseColor,
    removeVariantFromBaseColor,
    removeColorPair,
    addColorPair
  } = useContext(PaletteContext);
  const { pairs } = palette;

  const currentColor = palette.colors.find(
    c => c.id === palette.currentSelectedColor
  );

  const mappedPairs = useMemo(() => {
    return pairs.map(pair => {
      return {
        id: pair.id,
        background: flatColors.find(c => c.id === pair.bg),
        foreground: flatColors.find(c => c.id === pair.fg)
      };
    });
  }, [pairs, flatColors]);

  const [newPairs, setNewPairs] = useState([]);

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

  const onToggleNewPair = pair => {
    const updatedPair = {
      background: pair.foreground,
      foreground: pair.background
    };

    const updatedPairs = [...newPairs];
    const idxOfExistingPair = newPairs.indexOf(pair);
    if (idxOfExistingPair > -1) {
      updatedPairs.splice(idxOfExistingPair, 1, updatedPair);
      setNewPairs(updatedPairs);
    }
  };

  const onDismissNewPair = pair => {
    const updatedPairs = [...newPairs];
    const idx = newPairs.indexOf(pair);
    if (idx > -1) {
      updatedPairs.splice(idx, 1);
      setNewPairs(updatedPairs);
    }
  };

  const onAcceptNewPair = pair => {
    addColorPair(pair.background, pair.foreground);
    onDismissNewPair(pair);
  };

  const renderCurrentView = () => {
    return (
      <div>
        {currentView === PALETTE_VIEW && (
          <PaletteView colors={currentColor.variants} />
        )}
        {currentView === PAIRS_VIEW && (
          <PairsView
            pairs={mappedPairs}
            newPairs={newPairs}
            onToggleNewPair={onToggleNewPair}
            onDismissNewPair={onDismissNewPair}
            onAcceptNewPair={onAcceptNewPair}
          />
        )}
      </div>
    );
  };

  const addColorToPair = color => {
    const updatedPairs = [...newPairs];

    if (updatedPairs.length === 0) {
      updatedPairs.push({});
    }

    let colorPair = updatedPairs[updatedPairs.length - 1];

    if (colorPair.background && colorPair.foreground) {
      colorPair = { background: color };
      updatedPairs.push(colorPair);
    } else if (colorPair.background) {
      colorPair.foreground = color;
    } else {
      colorPair.background = color;
    }

    console.log("new pairs", updatedPairs);
    setNewPairs(updatedPairs);
  };

  const onTrashDrop = item => {
    if (item.type === EDITOR_PANEL_VARIANT) {
      removeVariantFromBaseColor(item, currentColor);
    } else if (item.type === EDITOR_PANEL_PAIR) {
      removeColorPair(item);
    }
  };

  const [{ canDrop }, drop] = useDrop({
    accept: COLOR_TILE,
    drop: item => {
      console.log("dropped", item);
      if (currentView === PALETTE_VIEW) {
        addVariantToBaseColor(item, currentColor);
      } else {
        addColorToPair(item);
      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop()
    })
  });

  const containerClass = cx(styles.container, {
    [styles.canDrop]: canDrop
  });
  return (
    <div ref={drop} className={containerClass}>
      <div className={styles.mainContent}>
        {renderViewSwitcher()} {renderCurrentView()}
      </div>
      <div className={styles.trashContainer}>
        <Trash
          accept={[EDITOR_PANEL_PAIR, EDITOR_PANEL_VARIANT]}
          onDrop={onTrashDrop}
        />
      </div>
    </div>
  );
};

export default EditorPanel;
