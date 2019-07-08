import React from "react";

import { useDrop } from "react-dnd";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Trash.module.scss";

export const Trash = ({ canDrop, ...props }) => {
  const containerClass = cx(styles.container, {
    [styles.canDrop]: canDrop
  });
  return (
    <div className={containerClass} {...props}>
      <FontAwesomeIcon icon="trash" className={styles.icon} />
    </div>
  );
};

const TrashContainer = ({ accept, onDrop, ...props }) => {
  const [{ canDrop }, drop] = useDrop({
    accept,
    drop: item => onDrop(item),
    collect: monitor => ({
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div ref={drop} {...props}>
      <Trash canDrop={canDrop} />
    </div>
  );
};

export default TrashContainer;
