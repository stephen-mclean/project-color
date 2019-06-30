import React from "react";

import AccessiblePair from "../../AccessiblePair/AccessiblePair";

const PairsView = ({ pairs }) => {
  return (
    <div>
      {pairs.map(pair => (
        <AccessiblePair {...pair} key={pair.id} className="margin-bottom" />
      ))}
    </div>
  );
};

export default PairsView;
