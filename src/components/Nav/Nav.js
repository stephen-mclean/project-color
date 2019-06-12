import React from "react";
import styles from "./Nav.module.scss";
import logo from "../../Small.svg";

const Nav = () => (
  <nav className={styles.nav}>
    <img src={logo} alt="logo" />
    <h4 className="text--colors-grey-base">rainbo</h4>
  </nav>
);

export default Nav;
