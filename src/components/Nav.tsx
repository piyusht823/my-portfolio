import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-hacker-darker/90 backdrop-blur-md shadow-lg border-b border-hacker-neon/20' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2">
          <Terminal className="text-hacker-neon" size={24} />
          <span className="text-xl font-bold gradient-text">piyush:</span>
        </a>

        {/* Desktop Nav + Profile */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-8">
            <a href="#" className="text-white hover:text-hacker-neon transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-hacker-neon transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-hacker-neon transition-colors">Projects</a>
            <a href="#skills" className="text-white hover:text-hacker-neon transition-colors">Skills</a>
            <a href="#contact" className="text-white hover:text-hacker-neon transition-colors">Contact</a>
          </nav>
          <img 
            src="/img/My_pic.jpg" 
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-hacker-neon object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Mobile Toggle & Profile Image */}
        <div className="md:hidden flex items-center gap-4">
          <img 
            src="/img/My_pic.jpg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border border-hacker-neon object-cover"
          />
          <button 
            className="text-white hover:text-hacker-neon focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-hacker-black/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col gap-6 items-center">
            <a 
              href="#" 
              className="text-2xl text-white hover:text-hacker-neon transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-2xl text-white hover:text-hacker-neon transition-colors"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-2xl text-white hover:text-hacker-neon transition-colors"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-2xl text-white hover:text-hacker-neon transition-colors"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-2xl text-white hover:text-hacker-neon transition-colors"
              onClick={closeMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
