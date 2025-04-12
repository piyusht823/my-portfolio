
import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Request!",
      description: "Plese reach out to me via email. piyusht823@gmail.com",
      className: "bg-hacker-darker border-hacker-neon text-white",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center gradient-text">
          Contact<span className="text-hacker-neon">_</span>Me
        </h2>
        <p className="text-gray-400 mb-12 text-center">Get in touch for collaborations or inquiries</p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="card-hacker">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-hacker-black border-hacker-neon/30 focus:border-hacker-neon text-white"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-hacker-black border-hacker-neon/30 focus:border-hacker-neon text-white"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-hacker-black border-hacker-neon/30 focus:border-hacker-neon text-white min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-hacker-neon text-hacker-black hover:bg-hacker-neon/80 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="card-hacker mb-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-hacker-cyan" size={20} />
                  <span className="text-white">piyusht823@gmail.com</span>
                </div>
                
                <p className="text-gray-300">
                  Feel free to reach out to me for any inquiries, collaborations, or just to say hello.
                  I'm always open to discussing new projects, opportunities, or partnerships.
                </p>
              </div>
            </div>
            
            <div className="card-hacker">
              <h3 className="text-xl font-bold mb-6">Find Me Online</h3>
              
              <div className="flex flex-col gap-4">
                <a href="https://github.com/piyusht823" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Github className="text-hacker-neon" size={20} />
                  <span>github.com/piyusht823</span>
                </a>
                
                <a href="https://www.linkedin.com/in/piyusht823/" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="text-hacker-cyan" size={20} />
                  <span>linkedin.com/in/piyusht823/</span>
                </a>
                
                <a href="https://x.com/piyusht823" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Twitter className="text-hacker-magenta" size={20} />
                  <span>x.com/piyusht823</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
