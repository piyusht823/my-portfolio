
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, FileText } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-hacker-darker">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 justify-center">
          <GraduationCap className="text-hacker-neon" />
          <span className="gradient-text">Education<span className="text-hacker-neon">_</span>History</span>
        </h2>
        
        <div className="space-y-8">
          {/* Degree 1 */}
          <div className="card-hacker relative overflow-hidden">
            <div className="absolute -left-4 h-full w-1 bg-gradient-to-b from-hacker-neon via-hacker-cyan to-hacker-purple"></div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-hacker-dark p-4 rounded-md border border-hacker-neon/20 flex items-center justify-center">
                  <span className="text-hacker-neon font-bold text-xl">2019 - 2023</span>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-hacker-neon mb-2">Bachelor of Technology</h3>
                <p className="text-xl text-white mb-4">Computer Science & Engineering</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-hacker-cyan" size={18} />
                    <span className="text-gray-300">University of Calcutta, Kolkata</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="text-hacker-magenta" size={18} />
                    <span className="text-gray-300">Graduated: May 2023</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="text-hacker-purple" size={18} />
                    <span className="text-gray-300">CGPA: 7.9/10</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-start gap-2">
                    <FileText className="text-hacker-neon mt-1" size={18} />
                    <p className="text-gray-300">
                      Specialized in Artificial Intelligence and Machine Learning. Completed thesis on "Neural Network Applications in Cybersecurity".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Degree 2 */}
          {/* <div className="card-hacker relative overflow-hidden">
            <div className="absolute -left-4 h-full w-1 bg-gradient-to-b from-hacker-purple via-hacker-magenta to-hacker-cyan"></div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-hacker-dark p-4 rounded-md border border-hacker-neon/20 flex items-center justify-center">
                  <span className="text-hacker-cyan font-bold text-xl">2018 - 2020</span>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-hacker-cyan mb-2">Master of Science</h3>
                <p className="text-xl text-white mb-4">Information Security</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-hacker-neon" size={18} />
                    <span className="text-gray-300">Stanford University, USA</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="text-hacker-magenta" size={18} />
                    <span className="text-gray-300">Graduated: June 2020</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="text-hacker-purple" size={18} />
                    <span className="text-gray-300">GPA: 3.92/4.0</span>
                  </div>
                </div> */}
                
                {/* <div className="mt-4">
                  <div className="flex items-start gap-2">
                    <FileText className="text-hacker-cyan mt-1" size={18} />
                    <p className="text-gray-300">
                      Research focus on Secure Software Development and Advanced Cryptographic Methods. Published paper on "Zero-Knowledge Proofs in Web Applications".
                    </p>
                  </div>
                </div>
              </div> */}
            {/* </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
