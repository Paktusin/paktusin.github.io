import React, { useContext, useMemo } from "react";
import { DataContext } from "../../apple/Apple";

export function Skills() {
  const { skills, name } = useContext(DataContext).skills;
  const groups = useMemo(() => Object.keys(skills), [skills]);
  return (
    <div className="card">
      <div className="skills card-body">
        <h4 className="text-center">{name}</h4>
        {groups.map((group) => (
          <div key={group}>
            <h5
              style={{ textTransform: "capitalize" }}
              className="border-bottom"
            >
              {group}
            </h5>
            <div className="container">
              <div className="row mb-3">
                {(skills as any)[group].map((skill: any) => (
                  <div
                    key={skill}
                    title={skill.name}
                    className="col-6 col-sm-4 col-md-3 col-lg-2 py-2 skill"
                    style={{ backgroundColor: skill.color }}
                  >
                    <div
                      className="img"
                      style={{
                        backgroundColor: skill.color,
                        backgroundImage: `url(${skill.logo})`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
