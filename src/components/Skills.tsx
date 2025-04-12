
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
        { name: "JavaScript/TypeScript", level: 9 },
        { name: "Python", level: 8 },
        { name: "Go", level: 7 },
        { name: "Rust", level: 6 }
      ]
    },
    {
      title: "Frontend",
      icon: Monitor,
      iconColor: "text-hacker-cyan",
      skills: [
        { name: "React", level: 9 },
        { name: "Vue.js", level: 7 },
        { name: "HTML/CSS", level: 9 },
        { name: "WebAssembly", level: 6 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      iconColor: "text-hacker-magenta",
      skills: [
        { name: "Node.js", level: 9 },
        { name: "Django", level: 7 },
        { name: "Express", level: 8 },
        { name: "GraphQL", level: 7 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      iconColor: "text-hacker-purple",
      skills: [
        { name: "PostgreSQL", level: 8 },
        { name: "MongoDB", level: 9 },
        { name: "Redis", level: 7 },
        { name: "Elasticsearch", level: 6 }
      ]
    },
    {
      title: "DevOps",
      icon: Command,
      iconColor: "text-hacker-neon",
      skills: [
        { name: "Docker", level: 9 },
        { name: "Kubernetes", level: 7 },
        { name: "CI/CD", level: 8 },
        { name: "Terraform", level: 7 }
      ]
    },
    {
      title: "Security",
      icon: Shield,
      iconColor: "text-hacker-cyan",
      skills: [
        { name: "Penetration Testing", level: 8 },
        { name: "Secure Coding", level: 9 },
        { name: "Threat Modeling", level: 7 },
        { name: "Cryptography", level: 6 }
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
