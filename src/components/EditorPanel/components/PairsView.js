import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AccessiblePair from "../../AccessiblePair/AccessiblePair";

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

const PairsView = ({ pairs }) => {
  return (
    <div>
      {pairs && pairs.length ? (
        pairs.map(pair => (
          <AccessiblePair {...pair} key={pair.id} className="margin-bottom" />
        ))
      ) : (
        <PlaceHolder />
      )}
    </div>
  );
};

export default PairsView;
