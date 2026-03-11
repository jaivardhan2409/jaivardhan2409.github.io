import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ExperienceEducation />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
