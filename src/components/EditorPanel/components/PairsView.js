import React from "react";
import PropTypes from "prop-types";

import DraggableAccessiblePair from "../../AccessiblePair/DraggableAccessiblePair";
import NewColorPair from "../../NewColorPair/NewColorPair";
import InfoMessage from "../../InfoMessage/InfoMessage";
import { EDITOR_PANEL_PAIR } from "../../../constants";

const PairsView = ({
  pairs,
  newPairs,
  onToggleNewPair,
  onDismissNewPair,
  onAcceptNewPair
}) => {
  if (!pairs.length && !newPairs.length) {
    return (
      <InfoMessage icon="box" message="Drag colors here to create pairs" />
    );
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
            onExchange={() => onToggleNewPair(pair)}
            onDismiss={() => onDismissNewPair(pair)}
            onAccept={() => onAcceptNewPair(pair)}
          />
        );
      })}
      {pairs.map(pair => (
        <DraggableAccessiblePair
          dragItem={{ ...pair, type: EDITOR_PANEL_PAIR }}
          {...pair}
          key={pair.id}
          className="margin-bottom"
          hideCloseBtn={true}
        />
      ))}
    </div>
  );
};

PairsView.propTypes = {
  /**
   * Array of pairs to display
   */
  pairs: PropTypes.array.isRequired,
  /**
   * Array of potential pairs to display
   */
  newPairs: PropTypes.array.isRequired,
  /**
   * Toggle callback for new pair
   */
  onToggleNewPair: PropTypes.func,
  /**
   * Accept callback for new pair
   */
  onAcceptNewPair: PropTypes.func,
  /**
   * Dismiss callback for new pair
   */
  onDismissNewPair: PropTypes.func
};

PairsView.defaultProps = {
  onToggleNewPair: () => {},
  onAcceptNewPair: () => {},
  onDismissNewPair: () => {}
};

export default PairsView;
