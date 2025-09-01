'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Shield, Users, Award, Zap, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Code,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and methodologies to deliver solutions that push boundaries.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Design Excellence',
      description: 'Every pixel matters. We create intuitive, beautiful interfaces that users love to interact with.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Your data is sacred. We implement robust security measures in every project we undertake.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We don\'t just work for you, we work with you. Collaboration is at the heart of everything we do.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const achievements = [
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Zap, number: '99.9%', label: 'Uptime' },
    { icon: Target, number: '500+', label: 'Goals Achieved' },
    { icon: Heart, number: '100%', label: 'Passion Driven' },
  ];

  const skills = [
    { name: 'UI/UX Design', percentage: 95, color: 'bg-purple-500' },
    { name: 'Frontend Development', percentage: 92, color: 'bg-blue-500' },
    { name: 'Backend Development', percentage: 88, color: 'bg-green-500' },
    { name: 'Cyber Security', percentage: 90, color: 'bg-red-500' },
    { name: 'Project Management', percentage: 94, color: 'bg-yellow-500' },
    { name: 'DevOps', percentage: 86, color: 'bg-cyan-500' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Users className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-gray-300">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Where <span className="text-gradient">Creativity</span> Meets
            <br />
            <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Nextzenith Ventures Mi Room, we're not just another development agency. 
            We're digital architects who transform complex challenges into elegant solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'
          }`}>
            <div className="glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between innovative design and robust technology, 
                  Nextzenith Ventures Mi Room has grown from a small startup to a trusted partner for 
                  businesses seeking digital transformation.
                </p>
                <p>
                  Our multidisciplinary team combines expertise in UI/UX design, full-stack development, 
                  cyber security, and business strategy to deliver comprehensive solutions that drive growth 
                  and create lasting impact.
                </p>
                <p>
                  We believe that great software is not just about code—it's about understanding human needs, 
                  solving real problems, and creating experiences that delight users while achieving business objectives.
                </p>
              </div>
              
              {/* Skills */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Our Expertise</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          

          {/* Right Column - Values & Achievements */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'
          }`}>
            {/* Core Values */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="card group hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-dark p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-dot"></div>
                <span className="text-sm text-gray-400">Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-blink"></div>
                <span className="text-sm text-gray-400">Fast response</span>
              </div>
            </div>
            <button className="btn-primary">
              Get Started Today
              <Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
