
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello World. I'm a Software Engineer.";
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center p-4">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute text-hacker-neon font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrix ${5 + Math.random() * 10}s linear infinite`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      
      <div className="text-center z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-hacker-neon animate-glow">
          &lt;Piyush_Tiwari&gt;
        </h1>
        
        <div className="mb-8 h-16">
          <span className="text-xl md:text-3xl font-mono">
            {typedText}
            <span className="inline-block w-1.5 h-5 md:h-6 bg-hacker-neon animate-blink"></span>
          </span>
        </div>
        
        <p className="text-gray-300 mb-8 text-md md:text-lg leading-relaxed">
          I create secure, efficient, and innovative software solutions.
          Specializing in full-stack development, cybersecurity, and system architecture.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 border border-hacker-neon text-hacker-neon hover:bg-hacker-neon/10 rounded transition-all hover:box-glow">
            <a href="#" className="text-white hover:text-hacker-neon transition-colors">Resume</a>
          </button>
          
          <button className="px-6 py-3 bg-hacker-neon text-hacker-black hover:bg-hacker-neon/80 rounded transition-all hover:box-glow">
           <a href="#contact" className="text-white hover:text-hacker-neon transition-colors">Contact</a>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-hacker-neon text-3xl">↓</span>
      </div>
    </section>
  );
};

export default Hero;
