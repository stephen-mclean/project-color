import React from "react";
import styles from "./Footer.module.scss";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const Footer = () => (
  <footer className={styles.container}>
    <ButtonGroup alignment="center">
      <Button className="btn btn--link margin-right">About</Button>
      <Button className="btn btn--link margin-right">Code</Button>
    </ButtonGroup>
  </footer>
);

export default Footer;
