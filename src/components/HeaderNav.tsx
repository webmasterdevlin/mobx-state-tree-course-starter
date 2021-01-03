import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid">
        <span className="navbar-brand me-5">
          <Link className="nav-link" to="/">
            <li className="fas fa-database me-1" />
            Mobx 6 Course
          </Link>
        </span>
        <ul className="navbar-nav me-5">
          <li className="nav-item">
            <Link className="nav-link" to="/heroes">
              Heroes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/anti-heroes">
              AntiHeroes
            </Link>
          </li>
        </ul>
        <span className="me-5" style={{ color: "purple" }}>
          Total heroes:
        </span>
        <span className="me-5" style={{ color: "purple" }}>
          Total anti-heroes:
        </span>
        <span className="me-5" style={{ color: "purple" }}>
          Last Edited Hero:
        </span>
        <span className="me-5" style={{ color: "purple" }}>
          Last Edited AntiHero:
        </span>
      </div>
    </nav>
  );
};
export default HeaderNav;
