import React from 'react';
import './App.css';
import Navbar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Home from "./Components/HomePage/Home"
import About from "./Components/AboutPage/About"
import Project from "./Components/ProjectsPage/Projects"
import Resume from "./Components/ResumePage/Resume"
import { Element, scroller } from 'react-scroll';

function App() {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection}/>
      <div className="content">
        <Element name="home">
          <Home/>
        </Element>
        <Element name="about">
          <About/>
        </Element>
        <Element name="project">
          <Project/>
        </Element>
        <Element name="resume">
          <Resume/>        
        </Element>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
