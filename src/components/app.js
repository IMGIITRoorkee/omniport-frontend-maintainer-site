import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import ProjectsGrid from './ProjectsGrid';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import '../css/App.css';


function App() {
  return (
    <div styleName="app">
      <Navbar />
      <main>
        <Hero />
        <ProjectCard />
        <ProjectsGrid />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App;
