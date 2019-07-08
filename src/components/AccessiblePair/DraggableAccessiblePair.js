import React from "react";
import { useDrag } from "react-dnd";

import AccessiblePair from "./AccessiblePair";

// TODO: This is very similar to DraggableColorTile
// TODO: Refactor into reusable component
const DraggableAccessiblePair = ({ dragItem, ...rest }) => {
  const [, drag] = useDrag({ item: dragItem });

  return (
    <div ref={drag} style={{ cursor: "pointer" }}>
      <AccessiblePair {...rest} />
    </div>
  );
};

export default DraggableAccessiblePair;
