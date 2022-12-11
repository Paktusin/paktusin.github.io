import React, { useContext } from "react";
import { DataContext } from "../../apple/Apple";

export function Projects() {
  const { projects, name } = useContext(DataContext).projects;
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="text-center">{name}</h4>
        {projects.map((project) => (
          <div key={project.title} className="mb-5">
            <h5 className="border-bottom mb-3">
              {project.url && (
                <a className="link" href={project.url} rel="noreferrer" target="_blank">
                  {project.title}
                </a>
              )}
              {!project.url && (
                <span ng-if="!project.url">{project.title}</span>
              )}
            </h5>
            <div className="d-flex">
              <div
                ng-if="project.logo"
                className="projectImage col-3"
                style={{ backgroundImage: `url("${project.logo}")` }}
              ></div>
              <p>{project.descr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
