'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Palette, Shield, Zap, Star, Github, Figma, Globe } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  const techStack = [
    { icon: Code2, name: 'Development', color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, name: 'UI/UX Design', color: 'from-purple-500 to-pink-500' },
    { icon: Shield, name: 'Cyber Security', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, name: 'Performance', color: 'from-yellow-500 to-orange-500' },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Star },
    { number: '98%', label: 'Client Satisfaction', icon: Github },
    { number: '24/7', label: 'Support Available', icon: Figma },
    { number: '5+', label: 'Years Experience', icon: Globe },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Mouse follower gradient */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-1000 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Available for new projects</span>
          </div>

          {/* Main heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`}>
            <span className="block text-white mb-2">Crafting Digital</span>
            <span className="block text-gradient">Experiences</span>
            <span className="block text-white">That Matter</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`}>
            We specialize in <span className="text-indigo-400 font-semibold">UI/UX design</span>, 
            <span className="text-purple-400 font-semibold"> IT development</span>, 
            <span className="text-cyan-400 font-semibold"> cyber security</span>, and 
            <span className="text-green-400 font-semibold"> business solutions</span> that transform ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`}>
            <button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              className="btn-ghost text-lg px-8 py-4"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Tech Stack */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}>
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group card-dark p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">{tech.name}</h3>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-indigo-400 mr-2" />
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-indigo-500 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
