import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import tinycolor from "tinycolor2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccessiblePair.module.scss";
import Pill from "../Pill/Pill";

const colorShape = PropTypes.shape({
  color: PropTypes.string,
  name: PropTypes.string
});

const AccessiblePair = ({
  background,
  foreground,
  hideCloseBtn,
  onCloseBtnClick,
  closeBtnIcon,
  ...otherProps
}) => {
  const title = `${background.name}/${foreground.name}`;

  const bgTileStyle = {
    "--tile-color": background.color
  };

  const fgTileStyle = {
    "--tile-color": foreground.color
  };

  const tileContainerClass = cx(styles.tileContainer, "margin-right--sm");
  const titleContainerClass = cx(
    styles.titleContainer,
    "margin-bottom--xxs",
    "text--colors-grey-lighten-30"
  );

  const isAAPass = tinycolor.isReadable(background.color, foreground.color, {
    level: "AA",
    size: "small"
  });
  const isAAAPass = tinycolor.isReadable(background.color, foreground.color, {
    level: "AAA",
    size: "small"
  });

  const aaDisplayText = "WCAG AA";
  const aaaDisplayText = "WCAG AAA";
  const aaPillType = isAAPass ? "success" : "error";
  const aaaPillType = isAAAPass ? "success" : "error";

  const examplePillStyle = {
    "--pill-background": background.color,
    "--pill-color": foreground.color
  };

  return (
    <div {...otherProps}>
      <div className={titleContainerClass}>
        <small className={styles.title}>{title}</small>
        {!hideCloseBtn && (
          <FontAwesomeIcon icon={closeBtnIcon} onClick={onCloseBtnClick} />
        )}
      </div>
      <div className={styles.mainContent}>
        <div className={tileContainerClass}>
          <div style={bgTileStyle} className={styles.tile} />
          <div style={fgTileStyle} className={styles.tile} />
        </div>

        <div className={styles.pillContainer}>
          <Pill type={aaPillType} className="margin-bottom--xxs">
            {aaDisplayText}
          </Pill>
          <Pill type={aaaPillType} className="margin-bottom--xxs">
            {aaaDisplayText}
          </Pill>
          <Pill style={examplePillStyle}>This is how text will look</Pill>
        </div>
      </div>
    </div>
  );
};

AccessiblePair.propTypes = {
  /**
   * The background color
   */
  background: colorShape.isRequired,
  /**
   * The foreground color
   */
  foreground: colorShape.isRequired,
  /**
   * Set to true to hide the close button
   */
  hideCloseBtn: PropTypes.bool,
  /**
   * Callback for when the close button is clicked
   */
  onCloseBtnClick: PropTypes.func,
  /**
   * FontAwesome icon to use for the close button
   */
  closeBtnIcon: PropTypes.string
};

AccessiblePair.defaultProps = {
  hideCloseBtn: false,
  onCloseBtnClick: () => {},
  closeBtnIcon: "times"
};

export default AccessiblePair;
