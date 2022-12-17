import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Apple } from "./apple/Apple";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";
import { Vk } from "./vk/Vk";
import "./index.scss";
import { Matrix } from "./matrix/Matrix";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Apple />}></Route>
        <Route path="/matrix" element={<Matrix />}></Route>
        <Route path="/vk/*" element={<Vk />}></Route>
      </Routes>
      <ThemeSelect />
    </BrowserRouter>
  );
}
