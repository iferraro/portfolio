import React from "react";
import Indicator from "./features/indicator/Indicator";
import Header from "./features/Header/Header";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";
import Contact from "./features/Contact/Contact";
import Footer from "./features/Footer/Footer";
const App = () => {
  return (
    <div className="flex flex-col justify-center p-4 font-theme text-theme-dark bg-theme-light">
      <Header />
      <Indicator />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
