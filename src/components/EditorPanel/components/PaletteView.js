import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ColorList from "../../ColorPaletteList/ColorPaletteList";

import styles from "./PaletteView.module.scss";

const PlaceHolder = () => {
  const iconClass = cx(styles.icon, "margin-bottom--xxs");
  return (
    <div className={styles.placeholder}>
      <FontAwesomeIcon icon="box" className={iconClass} />
      <div>Drag colors here to add to your palette</div>
    </div>
  );
};

const PaletteView = ({ colors }) => {
  return colors && colors.length > 1 ? (
    <ColorList colors={colors} />
  ) : (
    <PlaceHolder />
  );
};

export default PaletteView;
