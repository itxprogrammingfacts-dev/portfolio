import Navbar from "./components/Navbar"; 
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import ParticlesBackground from "./components/ParticlesBackground";
export default  function App () {
  return (<div className ="realtive gradient text-white">
    <ParticlesBackground/>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Experience/>
    <Testimonials/>
    <Footer/>
    <Contact/>
  </div>
  ) 
}
