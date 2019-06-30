import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AccessiblePair from "../../AccessiblePair/AccessiblePair";
import NewColorPair from "../../NewColorPair/NewColorPair";

import styles from "./PaletteView.module.scss";

const PlaceHolder = () => {
  const iconClass = cx(styles.icon, "margin-bottom--xxs");
  return (
    <div className={styles.placeholder}>
      <FontAwesomeIcon icon="box" className={iconClass} />
      <div>Drag colors here to create pairs</div>
    </div>
  );
};

const PairsView = ({ pairs, newPairs }) => {
  if (!pairs.length && !newPairs.length) {
    return <PlaceHolder />;
  }

  return (
    <div>
      {newPairs.map(pair => {
        const bg = pair.background ? pair.background.color : "";
        const fg = pair.foreground ? pair.foreground.color : "";

        return (
          <NewColorPair
            background={bg}
            foreground={fg}
            className="margin-bottom"
          />
        );
      })}
      {pairs.map(pair => (
        <AccessiblePair {...pair} key={pair.id} className="margin-bottom" />
      ))}
    </div>
  );
};

export default PairsView;
