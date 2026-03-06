import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Architecture from "./components/Architecture";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CostOptimization from "./components/CostOptimization";
import Reliability from "./components/Reliability";
import Pipeline from "./components/PipeLine";

function App() {
  return (
    <div className="scroll-smooth bg-slate-900 text-white">
      <NavBar />
      <Hero />

      <About />
      <Skills />

      <Pipeline />

      <Architecture />

      <Projects />

      <Experience />

      <Reliability />

      <CostOptimization />

      <Contact />
    </div>
    
  );
}

export default App;