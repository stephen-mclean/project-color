import React, { useContext, useMemo } from "react";

import { PaletteContext } from "../../components/PaletteProvider/PaletteProvider";
import AccessiblePair from "../../components/AccessiblePair/AccessiblePair";

import styles from "./AccessibilityMode.module.scss";

const AccessibilityMode = () => {
  const {
    palette: { pairs },
    flatColors,
    removeColorPair
  } = useContext(PaletteContext);

  const mappedPairs = useMemo(() => {
    return pairs.map(pair => {
      return {
        id: pair.id,
        background: flatColors.find(c => c.id === pair.bg),
        foreground: flatColors.find(c => c.id === pair.fg)
      };
    });
  }, [pairs, flatColors]);

  const onPairCloseBtnClick = pair => removeColorPair(pair);

  return (
    <div className={styles.container}>
      {mappedPairs.map(pair => (
        <AccessiblePair
          className="margin-right--xl margin-bottom--lg"
          {...pair}
          onCloseBtnClick={() => onPairCloseBtnClick(pair)}
        />
      ))}
    </div>
  );
};

export default AccessibilityMode;
