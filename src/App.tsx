import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Apple } from "./apple/Apple";
import { Vk } from "./vk/Vk";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Apple />}></Route>
        <Route path="/vk/*" element={<Vk />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
