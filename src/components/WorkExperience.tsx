import React from 'react';
import { Briefcase, Calendar, MapPin, FileText } from 'lucide-react';

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-hacker-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3 justify-center text-center">
          <Briefcase className="text-hacker-neon" />
          <span className="gradient-text">
            Work<span className="text-hacker-neon">_</span>Experience
          </span>
        </h2>

        <div className="relative border-l-2 border-hacker-neon/30 space-y-12 pl-8">
          {/* Job 1 */}
          <div className="relative group">
            <div className="absolute -left-10 top-1">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-hacker-neon">
              <img
                src="/logos/astreya_logo.jpeg"
                alt="TechNova Logo"
                className="w-14 h-14 rounded-full border-2 border-hacker-neon object-cover"
              />

              </div>
            </div>

            <div className="bg-hacker-darker border border-hacker-neon/20 rounded-xl p-6 hover:shadow-neon transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-hacker-neon">
                Software Engineer
              </h3>
              <p className="text-white text-lg mb-2">Astreya</p>

              <div className="flex flex-wrap gap-4 text-gray-400 mb-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-hacker-magenta" />
                  Oct 2025 - Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-hacker-cyan" />
                  Remote
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-hacker-purple" />
                  Full-time
                </span>
              </div>

              <div className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <FileText className="mt-1 text-hacker-neon" />
                <p>
                Building a platform that integrates Generative AI, FastAPI, and MCP to simplify API management and accelerate the software development lifecycle for developers.
                </p>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative group">
            <div className="absolute -left-10 top-1">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-hacker-cyan">
              <img
                src="/logos/logo3.webp"
                alt="TechNova Logo"
                className="w-14 h-14 rounded-full border-2 border-hacker-neon object-cover"
              />

              </div>
            </div>

            <div className="bg-hacker-darker border border-hacker-cyan/20 rounded-xl p-6 hover:shadow-cyan transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-hacker-cyan">
                Software Engineer
              </h3>
              <p className="text-white text-lg mb-2">LTIMindtree</p>

              <div className="flex flex-wrap gap-4 text-gray-400 mb-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-hacker-magenta" />
                  June 2023 - Oct 2025
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-hacker-neon" />
                  Bengaluru, India
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-hacker-purple" />
                  Full-time
                </span>
              </div>

              <div className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <FileText className="mt-1 text-hacker-cyan" />
                <p>
                  Enhanced an AI-Based Smart Risk Analyzer, which reduced unplanned outages by 15%. He also engineered a machine learning pipeline with over 90% accuracy and created a robust Flask backend API to handle hundreds of concurrent users. This work improved data-driven decision-making, shortening manual risk assessment cycles by 30%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
