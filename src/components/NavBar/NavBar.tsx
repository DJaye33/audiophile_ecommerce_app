import React from "react";
import Container from "../Container/Container";

import styles from "./NavBar.module.css";

import menuBtn from "../../assets/shared/tablet/icon-hamburger.svg";
import brandLogo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import NavLinkGroup from "../NavLinkGroup/NavLinkGroup";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <Container>
        <nav className={styles.nav}>
          <button className={styles.navBtn}>
            <img src={menuBtn} alt="menu" />
          </button>
          {/* {TODO: Replace a tags with router dom Link} */}
          <a href="/" className={styles.logoAnchor}>
            <img
              src={brandLogo}
              alt="audiophile logo"
              className={styles.logo}
            />
          </a>
          <NavLinkGroup />
          <button className={styles.navBtn}>
            <img src={cartIcon} alt="shopping cart" />
          </button>
        </nav>
      </Container>
      <hr className={styles.divider} />
    </div>
  );
};

export default NavBar;
