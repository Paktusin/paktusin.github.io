import React from "react";
import { Link, NavLink } from "react-router-dom";

export function MainNav() {
  return (
    <nav
      id="mainNav"
      className="navbar navbar-expand navbar-dark bg-primary sticky-top"
    >
      <div className="nav collapse navbar-collapse container">
        <div className="col-2 p-0 d-none d-sm-flex">
          <div className="navbar-brand logo" title="Yes I can draw!"></div>
        </div>
        <ul className="ms-auto navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to={"about"}>
              About me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"edu"}>
              Education
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"proj"}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"skills"}>
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function SideNav() {
  return (
    <div className="btn-group-vertical side-menu">
      <Link className="btn btn-sm btn-link" to={"/vk/about"}>
        <i className="fa fa-lg fa-home" aria-hidden="true"></i>About me
      </Link>
      <Link className="btn btn-sm btn-link" to={"/vk/edu"}>
        <i className="fa fa-lg fa-graduation-cap" aria-hidden="true"></i>
        Education
      </Link>
      <Link className="btn btn-sm btn-link" to={"/vk/proj"}>
        <i className="fa fa-lg fa-archive" aria-hidden="true"></i>Projects
      </Link>
      <Link className="btn btn-sm btn-link" to={"/vk/skills"}>
        <i className="fa fa-lg fa-hand-spock" aria-hidden="true"></i>Skills
      </Link>
    </div>
  );
}
