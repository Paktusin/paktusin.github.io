import dayjs from "dayjs";
import React, { useMemo, useState } from "react";
import { Certificate, Skill } from "../../../common/data";
import data from "../../../common/data.json";

export function About() {
  const postDate = dayjs("2015-09-01 15:30").format("short");
  const [devTime, setDevTime] = useState("Calculating...");
  const [itTime, setItTime] = useState("Calculating...");
  const certsMap = new Map<string, Certificate>(
    data.certificates.certs.map((c) => [c.name, c])
  );
  const randomGif = useMemo(
    () => `/gifs/${Math.floor(Math.random() * 8) + 1}.gif`,
    []
  );
  const skills: Skill[] = data.skills.skills.frontend;
  return (
    <div className="row about flex-column-reverse flex-sm-row">
      <div className="col-12 col-sm-4 pr-sm-0">
        <div className="card d-none d-sm-block">
          <div className="card-body">
            <div className="avatar mb-3"></div>
            <button className="btn btn-light w-100">Web developer</button>
          </div>
        </div>
        <div className="card pointer">
          <div className="card-body">
            <div className="mb-2">
              <span>Skills </span>
              <span className="text-black-50">{skills.length}</span>
            </div>
            <div className="row m-0">
              {skills.map((skill) => (
                <div className="col-4 p-0 circle-badge mb-2">
                  <div
                    className="img"
                    style={{
                      backgroundColor: skill.color,
                      backgroundImage: "url(" + skill.logo + ")",
                    }}
                  ></div>
                  <div>
                    {certsMap.has(skill.name) ? (
                      <a target="_blank" href={certsMap.get(skill.name)!.url}>
                        {skill.name}
                      </a>
                    ) : (
                      <span>{skill.name}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-8">
        <div className="card f13">
          <div className="card-body">
            <h4>Mikhail Davlichin</h4>
            <label>lets coding!</label>
            <hr />
            <div className="row">
              <div className="col-5">
                <label>City:</label>
              </div>
              <div className="col-7 text-left">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Moscow"
                  rel="noreferrer"
                >
                  Moscow
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <label>Specialization:</label>
              </div>
              <div className="col-7 text-left">Web developer</div>
            </div>
            <div className="row">
              <div className="col-5">
                <label>Education:</label>
              </div>
              <div className="col-7 text-left">
                Bachelor's degree / Information Systems and Technologies
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row p-3">
              <div className="col text-center">
                <a
                  className="link"
                  title="github"
                  href="https://github.com/Paktusin"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div className="col text-center">
                <a
                  className="link"
                  title="email"
                  href="mailto:paktusin@gmail.com"
                >
                  Email
                </a>
              </div>
              <div className="col text-center">
                <a
                  className="link"
                  title="telegram"
                  target="_blank"
                  href="https://t.me/paktusin"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card f13">
          <div className="card-body">
            <div className="d-flex flex-row">
              <div>
                <img
                  src="/avatar.png"
                  className="img-fluid rounded-circle mr-3"
                  width="50"
                  height="50"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <span className="text-primary font-weight-bold">
                  Mikhail Davlichin
                </span>
                <span className="text-black-50">{postDate}</span>
              </div>
            </div>
            <div className="p-3 text-center">
              <img className="img-fluid" src={randomGif} />
            </div>
            <h5 className="border-bottom">Development experience:</h5>
            <p id="devExp">{devTime}</p>
            <h5 className="border-bottom">All IT experience:</h5>
            <p id="allExp">{itTime}</p>

            <div className="">
              <div className="like-btn">
                <button
                  ng-click="toggleLike()"
                  className="btn btn-link pr-1"
                  ng-className="like==1?'text-danger':''"
                >
                  <i
                    className="fa fa-2x"
                    ng-className="like==1?'like fa-heart':' fa-heart-o'"
                  ></i>
                </button>
                <span ng-if="like">1</span>
              </div>
              <div className="like-btn">
                <button className="btn btn-link" ng-click="comment()">
                  <i className="fa fa-2x fa-comment-o "></i>
                </button>
              </div>
              <div className="like-btn">
                <button
                  className="btn btn-link position-relative"
                  ng-click="copyLink()"
                >
                  <i
                    className="fa fa-2x fa-share"
                    title="copy to clipboard"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer pr-0"></div>
        </div>
      </div>
    </div>
  );
}
