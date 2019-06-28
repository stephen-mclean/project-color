import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ColorTile from "../ColorTile/ColorTile";

import styles from "./NewColorPair.module.scss";

const NewColorPair = ({
  background,
  foreground,
  onExchange,
  onDismiss,
  onAccept,
  ...props
}) => {
  const titleClass = cx(
    styles.titleContainer,
    "margin-bottom--xxs",
    "text--colors-grey-base"
  );

  return (
    <div {...props}>
      <div className={titleClass}>
        <span>New Color Pair</span>
        <div>
          <FontAwesomeIcon
            icon="exchange-alt"
            onClick={onExchange}
            className="margin-right--xs"
          />
          <FontAwesomeIcon
            icon="times"
            onClick={onDismiss}
            className="margin-right--xs"
          />
          <FontAwesomeIcon icon="check" onClick={onAccept} />
        </div>
      </div>

      <ColorTile
        color={background}
        name="background"
        hideName={false}
        hideHex={false}
        className="margin-right"
      />
      <ColorTile
        color={foreground}
        name="foreground"
        hideName={false}
        hideHex={false}
      />
    </div>
  );
};

NewColorPair.propTypes = {
  /**
   * The background color
   */
  background: PropTypes.string.isRequired,
  /**
   * The foreground color
   */
  foreground: PropTypes.string.isRequired,
  /**
   * Callback to swap the background / foreground colors
   */
  onExchange: PropTypes.func,
  /**
   * Callback to dismiss the new pair
   */
  onDismiss: PropTypes.func,
  /**
   * Callback to accept the new pair
   */
  onAccept: PropTypes.func
};

export default NewColorPair;
