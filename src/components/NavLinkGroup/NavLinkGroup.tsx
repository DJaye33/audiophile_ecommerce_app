import styles from "./NavLinkGroup.module.css";
import NavLink from "../NavLink/NavLink";

import { links } from "../constants/utils";

const NavLinkGroup = () => {
  return (
    <div className={styles.navLinkGroup}>
      {links.map((link) => (
        <NavLink key={link} linkText={link.toUpperCase()} />
      ))}
    </div>
  );
};

export default NavLinkGroup;
