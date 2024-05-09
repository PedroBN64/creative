import { Navbar } from "./Compoments/Navbar";
import { Hero } from "./Compoments/Hero";
import { Partners } from "./Compoments/Partners";
import { Services } from "./Compoments/Services";
import { AboutUs } from "./Compoments/AboutUs";
import { Projects } from "./Compoments/Projects";
import { Teams } from "./Compoments/Teams";
import { Testimonials } from "./Compoments/Testimonials";
import { Contact } from "./Compoments/Contact";
import { Footer } from "./Compoments/Footer";



function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Partners/>
        <Services/>
        <AboutUs/>
        <Projects/>
        <Teams/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
