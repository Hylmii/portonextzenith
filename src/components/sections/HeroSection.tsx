'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Palette, Shield, Zap, Star, Github, Figma, Globe, MessageCircle, Mail } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.contact-dropdown')) {
        setShowContactOptions(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleWhatsAppContact = () => {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp perusahaan Anda
    const message = `Hello Nextzenith Team! 👋

I'm interested in your services and would like to discuss a potential project.

Could we schedule a consultation to talk about:
• Project requirements
• Timeline and budget
• Available services

Looking forward to hearing from you!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowContactOptions(false);
  };

  const handleContactForm = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowContactOptions(false);
  };

  
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
            
            {/* Get in Touch with Dropdown */}
            <div className="relative contact-dropdown">
              <button 
                className="btn-ghost text-lg px-8 py-4"
                onClick={() => setShowContactOptions(!showContactOptions)}
              >
                Get in Touch
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showContactOptions ? 'rotate-90' : ''}`} />
              </button>
              
              {/* Contact Options Dropdown */}
              {showContactOptions && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl z-50 animate-slide-up">
                  <div className="p-4 space-y-3">
                    <button
                      onClick={handleWhatsAppContact}
                      className="w-full flex items-center gap-3 p-3 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-medium">WhatsApp</div>
                        <div className="text-green-400 text-sm">Quick response</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button
                      onClick={handleContactForm}
                      className="w-full flex items-center gap-3 p-3 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-medium">Contact Form</div>
                        <div className="text-indigo-400 text-sm">Detailed inquiry</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              )}
            </div>
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
