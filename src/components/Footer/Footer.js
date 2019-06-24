import React from "react";
import { withRouter } from "react-router-dom";

import { ABOUT_ROUTE } from "../../constants";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

import styles from "./Footer.module.scss";

const SOURCE_URL = "https://github.com/stephan-mclean/project-color";

const Footer = ({ history }) => {
  const goTo = path => {
    history.push(path);
  };

  const goToExternal = url => {
    window.open(url);
  };

  return (
    <footer className={styles.container}>
      <ButtonGroup alignment="center">
        <Button
          className="btn btn--link margin-right"
          onClick={() => goTo(ABOUT_ROUTE.path)}
        >
          {ABOUT_ROUTE.name}
        </Button>
        <Button
          className="btn btn--link margin-right"
          onClick={() => goToExternal(SOURCE_URL)}
        >
          Code
        </Button>
      </ButtonGroup>
    </footer>
  );
};

export default withRouter(Footer);
