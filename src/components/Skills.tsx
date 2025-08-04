
import React from 'react';
import { Code, Server, Database, Terminal, Shield, GitBranch, Monitor, Command } from 'lucide-react';

const SkillCategory = ({ 
  title, 
  skills, 
  icon: Icon,
  iconColor 
}: { 
  title: string; 
  skills: Array<{name: string; level: number}>; 
  icon: React.ElementType;
  iconColor: string;
}) => {
  return (
    <div className="card-hacker">
      <div className="flex items-center gap-2 mb-6">
        <Icon className={iconColor} size={20} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-hacker-neon">{skill.level * 10}%</span>
            </div>
            <div className="h-2 bg-hacker-darker rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-hacker-neon to-hacker-cyan"
                style={{ width: `${skill.level * 10}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: Code,
      iconColor: "text-hacker-neon",
      skills: [
        { name: "Python", level: 10 },
        { name: "JavaScript", level: 9 },
        { name: "Java", level: 8 },
      ]
    },
    {
      title: "Frontend",
      icon: Monitor,
      iconColor: "text-hacker-cyan",
      skills: [
        { name: "React", level: 8 },
        { name: "Vue.js", level: 8 },
        { name: "HTML/CSS", level: 10 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      iconColor: "text-hacker-magenta",
      skills: [
        { name: "Flask", level: 10 },
        { name: "FastAPI", level: 9 },
        { name: "SprinBoot", level: 8 }      
      ]
    },
    {
      title: "Database",
      icon: Database,
      iconColor: "text-hacker-purple",
      skills: [
        { name: "PostgreSQL", level: 10 },
        { name: "MongoDB", level: 8 },
        { name: "mySQL", level: 10 }      
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center gradient-text">
          Tech<span className="text-hacker-neon">_</span>Stack
        </h2>
        <p className="text-gray-400 mb-12 text-center">My technical skills and expertise</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
