import React from "react";
import Ocr from "./components/Ocr";
import Homepage from "./components/Home";
import Mreport from "./components/Mreport";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import Tablets from "./components/Tablets";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="image" element={<Ocr />}></Route>
            <Route path="medical" element={<Mreport />}></Route>
            <Route path="tablets" element={<Tablets />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
};

export default App;
