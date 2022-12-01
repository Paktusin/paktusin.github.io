import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Apple } from "./apple/Apple";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="apple" element={<Apple />}></Route>
        <Route path="" element={<Navigate to={"apple"}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
