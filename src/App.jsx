// src/App.jsx

// import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/customscursor';
import Navbar from './components/navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skill from './sections/skill';
import Project from './sections/project';
import Experience from './sections/experience';
//import Testimonial from './sections/testimonial';
import Contact from './sections/contact';
import Footer from './sections/footer';
import React from 'react';
import IntroAnimation from './components/introAnimation';

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />

          {/* <ParticlesBackground /> */}

          {/* Main Sections */}
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Project />
          <Experience />
         {/* <Testimonial /> */}
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
