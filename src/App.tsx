import React from "react";
import Indicator from "./features/indicator/Indicator";
import Header from "./features/Header/Header";
import About from "./features/About/About";
import ProjectGallery from "./features/ProjectGallery/ProjectGallery";
import Contact from "./features/Contact/Contact";
const App = () => {
  return (
    <div className="flex flex-col justify-center p-4 font-theme text-theme-dark bg-theme-light">
      <Header />
      <Indicator />
      <About />
      <ProjectGallery />
      <Contact />
    </div>
  );
};

export default App;
