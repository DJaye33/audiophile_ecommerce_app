import styles from "./NavLink.module.css";

interface NavLinkProps {
  linkText: string;
}

const NavLink = ({ linkText }: NavLinkProps) => {
  return (
    /* FIXME: Replace with router dom Link */
    <a href="/" className={styles.navLink}>
      {linkText}
    </a>
  );
};

export default NavLink;
