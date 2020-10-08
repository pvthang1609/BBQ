import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function NavItem({ to, children, exact }) {
  let match = useRouteMatch({
    path: to,
    exact: exact,
  });

  return (
    <Link to={to} className={match ? "navItem__active" : ""}>
      {children}
    </Link>
  );
}
