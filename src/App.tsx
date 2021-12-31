import logo from "./logo.svg";
import Graph from "./features/graph/Graph";
import Header from "./features/Header/Header";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";
import Contact from "./features/Contact/Contact";
import Footer from "./features/Footer/Footer";

const App = () => {
  return (
    <div className="p-4 bg-theme-dark text-theme-light">
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
