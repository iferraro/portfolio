import logo from "./logo.svg";
import Graph from "./features/indicator/Indicator";
import Header from "./features/Header/Header";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";
import Contact from "./features/Contact/Contact";
import Footer from "./features/Footer/Footer";
import Northwest from "./features/Northwest/Northwest";
import { x } from "./features/constant";
const App = () => {
  console.log(x, "<= this is x");
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
