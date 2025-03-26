import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
