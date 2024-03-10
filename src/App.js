import "./App.css";
import "./custom.css";
import Hero from "./Pages/Hero";
import Navbar from "./Components/Navbar";
import ProjectShowCase from "./Pages/.Projects/ProjectShowCase";
import Aboutus from "./Pages/.Projects/Aboutus";
import Contact from "./Pages/.Projects/Contact";
import Project1_Details from "./Pages/Projects/Project1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayOut";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectShowCase />} />
          <Route path="/project1-details" element={<Project1_Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
