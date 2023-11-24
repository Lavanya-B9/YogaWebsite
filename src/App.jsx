import React from "react";
import Navbar from "./Components/Navbar.jsx/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Programs from "./Components/Programs/Programs";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonials/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
