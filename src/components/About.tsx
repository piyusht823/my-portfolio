
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
                <span className="text-white">2+ Years</span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-hacker-neon" size={18} />
                <span className="text-gray-400">Location:</span>
                <span className="text-white">Bengaluru, India</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Briefcase className="text-hacker-purple" size={18} />
                <span className="text-gray-400">Current Role:</span>
                <span className="text-white">Software Engineer</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">
              A highly motivated Software Engineer with over 2 years of experience in designing, building, and deploying intelligent systems and data-driven applications. Expertise in leveraging Python and backend frameworks with a strong focus on Generative AI and large language models. Proven ability to enhance existing systems, develop machine learning pipelines, and create robust APIs with measurable impact on efficiency and decision-making.
            </p>
            
            {/* <p className="text-gray-300">
              When I'm not coding, you can find me participating in CTF competitions, contributing to open-source projects,
              or exploring the latest advancements in technology.
            </p> */}
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-hacker-neon" />
              <span className="gradient-text">Core<span className="text-hacker-neon">_</span>Skills</span>
            </h2>
            
            <div className="card-hacker mb-4">
              <h3 className="text-hacker-neon mb-4">Tech-skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-hacker-neon">{'>'}</span>
                  <span>Programming Language: Python, C++, Java, JavaScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-neon">{'>'}</span>
                  <span>Frameworks & Technology: Flask, FastAPI, ML, Gen AI, Springboot</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-neon">{'>'}</span>
                  <span>Database: PostgreSQL, MySQL</span>
                </li>
              </ul>
            </div>
            
            <div className="card-hacker mb-4">
              <h3 className="text-hacker-cyan mb-4">Soft-skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">{'>'}</span>
                  <span> Analytical Thinking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">{'>'}</span>
                  <span>Collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">{'>'}</span>
                  <span>Adaptability</span>
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
