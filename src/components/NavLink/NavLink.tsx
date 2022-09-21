import React from "react";

interface NavLinkProps {
  linkText: string;
}

const NavLink = ({ linkText }: NavLinkProps) => {
  return (
    /* FIXME: Replace with router dom Link */
    <a href="/">{linkText}</a>
  );
};

export default NavLink;
