import React from "react";
import cx from "classnames";
import { withRouter } from "react-router-dom";

import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import { ALL_ROUTES } from "../../constants";
import styles from "./ModeSwitcher.module.scss";

const ModeSwitcher = ({ history, location, ...otherProps }) => {
  const switchMode = path => {
    history.push(path);
  };

  const isActive = path => {
    return location.pathname === path;
  };

  const activeRoute = ALL_ROUTES.find(r => r.path === location.pathname) || {};

  return (
    <div {...otherProps}>
      <ButtonGroup alignment="center" className="margin-bottom--lg">
        {ALL_ROUTES.map(route => {
          const btnClass = cx("btn btn--default margin-right", {
            "btn--active": isActive(route.path)
          });
          return (
            <Button
              key={`mode-switcher-${route.name}`}
              onClick={() => switchMode(route.path)}
              className={btnClass}
            >
              {route.name}
            </Button>
          );
        })}
      </ButtonGroup>
      <h4 className={styles.modeDescription}>{activeRoute.description}</h4>
    </div>
  );
};

export default withRouter(ModeSwitcher);
