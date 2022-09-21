import React from "react";
import Container from "../Container/Container";

import menuBtn from "../../assets/shared/tablet/icon-hamburger.svg";
import brandLogo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";

const NavBar = () => {
  return (
    <div>
      <Container>
        <nav>
          <button>
            <img src={menuBtn} alt="menu" />
          </button>
          {/* {TODO: Replace a tags with router dom Link} */}
          <a href="/">
            <img src={brandLogo} alt="audiophile logo" />
          </a>
          <button>
            <img src={cartIcon} alt="shopping cart" />
          </button>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
