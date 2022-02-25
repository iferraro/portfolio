import React from "react";
import Graph from "./features/indicator/Indicator";
import Header from "./features/Header/Header";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";
import Contact from "./features/Contact/Contact";
import Footer from "./features/Footer/Footer";
const App = () => {
  return (
    <div className="p-4 flex flex-col justify-center bg-theme-light text-theme-dark">
      <Header />
      <Graph />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
