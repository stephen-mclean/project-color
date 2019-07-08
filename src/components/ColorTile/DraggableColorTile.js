import React from "react";
import { useDrag } from "react-dnd";

import ColorTile from "./ColorTile";

const DraggableColorTile = ({ dragItem, ...rest }) => {
  const [, drag] = useDrag({ item: dragItem });

  return (
    <div ref={drag}>
      <ColorTile {...rest} />
    </div>
  );
};

export default DraggableColorTile;
