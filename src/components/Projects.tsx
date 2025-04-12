
import React from 'react';
import { Code, Shield, Database, Link, Github } from 'lucide-react';

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
  links: { demo?: string; github?: string } 
}) => {
  return (
    <div className="card-hacker group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-hacker-neon/30 to-hacker-magenta/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <Icon className={iconColor} size={24} />
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
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "SecureAuth",
      description: "A secure authentication system with multi-factor authentication, biometric verification, and comprehensive audit logging.",
      tags: ["React", "Node.js", "JWT", "Biometrics API"],
      icon: Shield,
      iconColor: "text-hacker-magenta",
      links: { demo: "#", github: "#" }
    },
    {
      title: "DataVault",
      description: "Encrypted data storage solution with zero-knowledge architecture, ensuring that only the user can access their data.",
      tags: ["Python", "Cryptography", "AWS", "Redis"],
      icon: Database,
      iconColor: "text-hacker-cyan",
      links: { demo: "#", github: "#" }
    },
    {
      title: "CodeGuardian",
      description: "Automated code security scanner that identifies vulnerabilities and suggests secure coding practices.",
      tags: ["TypeScript", "Static Analysis", "OWASP", "CI/CD"],
      icon: Code,
      iconColor: "text-hacker-neon",
      links: { demo: "#", github: "#" }
    },
    {
      title: "NetMonitor",
      description: "Real-time network traffic analyzer that detects suspicious activities and potential security threats.",
      tags: ["Go", "Packet Analysis", "Machine Learning", "Visualization"],
      icon: Shield,
      iconColor: "text-hacker-cyan",
      links: { demo: "#", github: "#" }
    },
    {
      title: "CloudShield",
      description: "Comprehensive cloud security posture management solution for AWS, Azure, and GCP environments.",
      tags: ["React", "Terraform", "Cloud APIs", "Compliance"],
      icon: Database,
      iconColor: "text-hacker-magenta",
      links: { github: "#" }
    },
    {
      title: "SecurePipe",
      description: "Secure CI/CD pipeline framework with built-in security checks and compliance validation.",
      tags: ["Docker", "Kubernetes", "Jenkins", "Compliance"],
      icon: Code,
      iconColor: "text-hacker-neon",
      links: { github: "#" }
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
