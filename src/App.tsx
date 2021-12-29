import logo from "./logo.svg";
import Graph from "./features/graph/Graph";
import Header from "./features/Header/Header";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";
import Contact from "./features/Contact/Contact";
import Footer from "./features/Footer/Footer";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listSines = (arr: Array<number>) => {
  arr.forEach((n: number) => console.log(Math.sin(n))); // function to see if Math.sin() is working correctly
};

const App = () => {
  listSines(nums);
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
