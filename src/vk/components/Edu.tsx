import React, { useContext } from "react";
import { DataContext } from "../../apple/Apple";

export function Edu() {
  const data = useContext(DataContext);
  const certs = data.certificates.certs;
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="text-center">Education</h4>
        <div className="col-12 col-sm-6 col-md-4 mb-3 float-start me-4">
          <img
            alt="bgpi"
            className="img-fluid image"
            src="https://i.imgur.com/Hje3bfj.jpg"
          />
        </div>
        <div>
          <p>
            Graduate from{" "}
            <a
              href="https://goo.gl/maps/5kQcUt6qFL82"
              rel="noreferrer"
              target="_blank"
            >
              Birobidjan State Pedagogical Institute
            </a>
            , faculty of Mathematics and Informatics, specialty Information
            Systems and Technologies , engineer's degree
          </p>
          <p>
            At the institute, I studied the creation of information systems.
            Development of web applications and desktop applications. Basically
            the development was on Delphi. The graduation project was developed
            in Java. It was a cross-platform Java application for a computer
            store to account for computer sales.
          </p>
          <p>
            I started my career as a sysadmin. Then I become to a web developer.
            And I began to study the methods of developing web applications in
            more detail. Most of all like to develop the front end of web sites.
          </p>
          <p>
            Now I am a frontend developer who is an expert in web application
            development. For the past 7 years have been designing and developing
            web applications. Main areas of focus are in TypeScript, React,
            Angular and SCSS.
          </p>
        </div>
        <h5 className="border-bottom mb-3">Certificates</h5>
        <div className="row">
          {certs.map((cert, index) => (
            <div
              key={index}
              ng-repeat="cert in certs"
              className="col-12 col-sm-6 col-md-4 mb-3 text-center"
            >
              <a
                title={cert.name + " " + cert.title}
                href={cert.url}
                rel="noreferrer"
                className="border d-block h-100"
                target="_blank"
              >
                <img
                  alt={cert.title}
                  className="image img-fluid"
                  src={cert.img}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
