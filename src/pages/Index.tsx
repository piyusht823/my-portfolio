
import React from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WorkExperience from '@/components/WorkExperience';

const Index = () => {
  return (
    <div className="min-h-screen bg-hacker-dark text-white">
      <Nav />
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
