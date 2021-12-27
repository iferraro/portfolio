import logo from './logo.svg';
import Header from './features/Header/Header';
import About from './features/About/About';
import Projects from './features/Projects/Projects';
import Contact from './features/Contact/Contact';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
