import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Uxui from "./pages/Uxui";
import Storybook from "./pages/Storybook";
import Newsletter from "./pages/Newsletter";
import Poster from "./pages/Poster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />}/>
        <Route path="/Project/Uxui" element={<Uxui />}/>
        <Route path="/Project/Storybook" element={<Storybook />}/>
        <Route path="/Project/Newsletter" element={<Newsletter />}/>
        <Route path="/Project/Poster" element={<Poster />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
