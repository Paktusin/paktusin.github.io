import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { cat } from "./cat";
import { About } from "./components/About";
import { Edu } from "./components/Edu";
import { MainNav, SideNav } from "./components/MainNav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./vk.scss";

export function Vk() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      const kill = cat();
      return () => kill();
    }
  }, []);
  return (
    <div className="vk">
      <MainNav />
      <div className="container">
        <div className="row mt-3">
          <div className="col-2 d-none d-md-block ps-0">
            <SideNav />
          </div>
          <div className="col-12 col-md-10">
            <Routes>
              <Route path="about" element={<About />}></Route>
              <Route path="edu" element={<Edu />}></Route>
              <Route path="proj" element={<Projects />}></Route>
              <Route path="skills" element={<Skills />}></Route>
              <Route path="" element={<Navigate to={'about'}/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
