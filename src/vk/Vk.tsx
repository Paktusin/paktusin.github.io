import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { cat } from "./cat";
import { MainNav, SideNav } from "./components/MainNav/MainNav";
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
          <div className="col-2 d-none d-md-block pl-0">
            <SideNav />
          </div>
          <div className="col-12 col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
