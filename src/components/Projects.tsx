
import React from 'react';
import { Code, Shield, Database, Stethoscope, Waypoints, Link, Github, Video } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  icon: Icon,
  iconColor,
  links 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  icon: React.ElementType;
  iconColor: string;
  links: { demo?: string; github?: string ; video?: string }; 
}) => {
  return (
    <div className="card-hacker group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-hacker-neon/30 to-hacker-magenta/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <Icon className={iconColor} size={22} />
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded bg-hacker-darker border border-hacker-neon/30 text-hacker-neon"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {links.demo && (
            <a 
              href={links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-hacker-cyan hover:text-hacker-cyan/80 transition-colors"
            >
              <Link size={16} />
              <span>Live Demo</span>
            </a>
          )}
          
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          )}

          {links.video && (
            <a 
              href={links.video} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <Video size={16} />
              <span>Watch Video</span>
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "codegenerate",
      description: "This Spring Boot application generates end-to-end code for projects, performs code analysis (e.g., languages used and number of lines of code), and stores the code along with additional information such as language and code lines in a database.",
      tags: ["Python", "Next.js", "Spring Boot", "PostgreSQL", "Gen AI"],
      icon: Code,
      iconColor: "text-hacker-cyan",
      links: { github: "https://github.com/piyusht823/codegenerate" }
    },
    {
      title: "saarthi",
      description: "It is a comprehensive real-time remote health monitoring system featuring an IoT device and a web application that facilitates monitoring and interaction between patients and doctors.",
      tags: ["JavaScript", "C++", "iOT", "Firebase"],
      icon: Stethoscope,
      iconColor: "text-hacker-magenta",
      links: { demo: "https://saarthiapp.netlify.app/", github: "https://github.com/piyusht823/saarthi"}
    },
    {
      title: "Alumni association platform",
      description: "CUAlumni is an alumni association platform developed for my university, utilizing PHP for the backend and MySQL for the database.",
      tags: ["HTML", "JavaScript", "mySQL", "php"],
      icon: Waypoints,
      iconColor: "text-hacker-neon",
      links: { github: "https://github.com/piyusht823/Alumni-Association" }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-hacker-darker">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center gradient-text">
          Project<span className="text-hacker-neon">_</span>Portfolio
        </h2>
        <p className="text-gray-400 mb-12 text-center">A collection of my most impactful work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
