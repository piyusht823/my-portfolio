
import React from 'react';
import { Terminal, User, Calendar, MapPin, Briefcase, Code, Shield, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="text-hacker-neon" />
              <span className="gradient-text">About<span className="text-hacker-neon">_</span>Me</span>
            </h2>
            
            <div className="card-hacker mb-6">
              <div className="flex items-center gap-2 mb-3">
                <User className="text-hacker-cyan" size={18} />
                <span className="text-gray-400">Name:</span>
                <span className="text-white">Piyush Tiwari</span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="text-hacker-magenta" size={18} />
                <span className="text-gray-400">Experience:</span>
                <span className="text-white">1.8 Years</span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-hacker-neon" size={18} />
                <span className="text-gray-400">Location:</span>
                <span className="text-white">Bangalore, India</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Briefcase className="text-hacker-purple" size={18} />
                <span className="text-gray-400">Current Role:</span>
                <span className="text-white">Software Engineer</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">
              I'm a passionate software engineer with expertise in building secure, robust, and scalable applications.
              My journey in the tech world began with a fascination for how systems work and how they can be optimized.
            </p>
            
            <p className="text-gray-300">
              When I'm not coding, you can find me participating in CTF competitions, contributing to open-source projects,
              or exploring the latest advancements in technology.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-hacker-neon" />
              <span className="gradient-text">Core<span className="text-hacker-neon">_</span>Skills</span>
            </h2>
            
            <div className="card-hacker mb-4">
              <h3 className="text-hacker-neon mb-4">Software Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-hacker-neon">{'>'}</span>
                  <span>Full-Stack Development (Python, React, ML, Spring Boot)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-neon">{'>'}</span>
                  <span>API Design & Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-neon">{'>'}</span>
                  <span>Worked on ML and Gen AI solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="card-hacker mb-4">
              <h3 className="text-hacker-cyan mb-4">Cybersecurity</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">{'>'}</span>
                  <span>Penetration Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">{'>'}</span>
                  <span>Secure Coding Practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">{'>'}</span>
                  <span>Vulnerability Assessment</span>
                </li>
              </ul>
            </div>
            
            {/* <div className="card-hacker">
              <h3 className="text-hacker-magenta mb-4">DevOps & Infrastructure</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-hacker-magenta">{'>'}</span>
                  <span>CI/CD Pipeline Implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-magenta">{'>'}</span>
                  <span>Cloud Infrastructure (AWS, Azure)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-magenta">{'>'}</span>
                  <span>Containerization & Orchestration</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
