import React from "react";

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
        <ul className="ml-auto navbar-nav">
          <li className="nav-item">
            <a className="nav-link" ui-sref="app.about" ui-sref-active="active">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              ui-sref="app.education"
              ui-sref-active="active"
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              ui-sref="app.projects"
              ui-sref-active="active"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              ui-sref="app.skills"
              ui-sref-active="active"
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/apple">
              Apple theme
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function SideNav() {
  return (
    <div className="btn-group-vertical side-menu">
      <a className="btn btn-sm btn-link" ui-sref="app.about">
        <i className="fa fa-lg fa-home" aria-hidden="true"></i>About me
      </a>
      <a className="btn btn-sm btn-link" ui-sref="app.education">
        <i className="fa fa-lg fa-graduation-cap" aria-hidden="true"></i>
        Education
      </a>
      <a className="btn btn-sm btn-link" ui-sref="app.projects">
        <i className="fa fa-lg fa-archive" aria-hidden="true"></i>Projects
      </a>
      <a className="btn btn-sm btn-link" ui-sref="app.skills">
        <i className="fa fa-lg fa-hand-spock-o" aria-hidden="true"></i>Skills
      </a>
    </div>
  );
}
