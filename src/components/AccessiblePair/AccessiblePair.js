import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import tinycolor from "tinycolor2";
import styles from "./AccessiblePair.module.scss";

import Pill from "../Pill/Pill";

const colorShape = PropTypes.shape({
  color: PropTypes.string,
  name: PropTypes.string
});

const AccessiblePair = ({ background, foreground }) => {
  const title = `${background.name}/${foreground.name}`;

  const bgTileStyle = {
    "--tile-color": background.color
  };

  const fgTileStyle = {
    "--tile-color": foreground.color
  };

  const tileContainerClass = cx(styles.tileContainer, "margin-right");

  const titleClass = cx(
    styles.title,
    "text--colors-grey-lighten-30",
    "margin-bottom--xxs"
  );

  const isAAPass = tinycolor.isReadable(background.color, foreground.color, {
    level: "AA",
    size: "small"
  });
  const isAAAPass = tinycolor.isReadable(background.color, foreground.color, {
    level: "AAA",
    size: "small"
  });

  const aaDisplayText = isAAPass ? "WCAG AA Pass" : "WCAG AA Fail";
  const aaaDisplayText = isAAAPass ? "WCAG AAA Pass" : "WCAG AAA Fail";
  const aaPillType = isAAPass ? "success" : "error";
  const aaaPillType = isAAAPass ? "success" : "error";

  return (
    <div>
      <small className={titleClass}>{title}</small>
      <div className={styles.mainContent}>
        <div className={tileContainerClass}>
          <div style={bgTileStyle} className={styles.tile} />
          <div style={fgTileStyle} className={styles.tile} />
        </div>

        <Pill type={aaPillType} className="margin-right--xxs">
          {aaDisplayText}
        </Pill>
        <Pill type={aaaPillType}>{aaaDisplayText}</Pill>
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
  foreground: colorShape.isRequired
};

export default AccessiblePair;
