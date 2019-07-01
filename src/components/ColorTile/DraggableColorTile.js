import React from "react";
import { useDrag } from "react-dnd";

import ColorTile from "./ColorTile";
import { COLOR_TILE } from "../../constants";

const DraggableColorTile = ({ dragItem, ...rest }) => {
  const [, drag] = useDrag({ item: { ...dragItem, type: COLOR_TILE } });

  return (
    <div ref={drag}>
      <ColorTile {...rest} />
    </div>
  );
};

export default DraggableColorTile;
