
import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-hacker-darker border-t border-hacker-neon/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Terminal className="text-hacker-neon" size={24} />
            <span className="text-xl font-bold gradient-text">piyush:</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} | <span className="text-hacker-neon">Piyush</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-hacker-neon transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-hacker-cyan transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-hacker-magenta transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-hacker-neon transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-hacker-cyan transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
