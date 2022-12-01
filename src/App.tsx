import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Apple } from "./apple/Apple";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Apple />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
