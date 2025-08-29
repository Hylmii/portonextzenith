'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, Palette, Shield, Globe, Database, Cloud, 
  Smartphone, BarChart3, Zap, CheckCircle, ArrowRight,
  Layers, Settings, Users
} from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning interfaces that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting at $2,500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications built with modern technologies for optimal performance and scalability.',
      features: ['React/Next.js', 'Node.js/Python', 'Database Design', 'API Development'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting at $5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      color: 'from-green-500 to-emerald-500',
      price: 'Starting at $8,000'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Training'],
      color: 'from-red-500 to-orange-500',
      price: 'Starting at $3,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions for modern application deployment.',
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring'],
      color: 'from-indigo-500 to-purple-500',
      price: 'Starting at $4,000'
    },
    {
      icon: BarChart3,
      title: 'Business Solutions',
      description: 'Custom business applications and analytics solutions to streamline operations and drive growth.',
      features: ['CRM Systems', 'Analytics', 'Automation', 'Integration'],
      color: 'from-yellow-500 to-orange-500',
      price: 'Starting at $6,000'
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      icon: Layers,
      title: 'Planning',
      description: 'Detailed project planning with timeline, milestones, and resource allocation.'
    },
    {
      icon: Settings,
      title: 'Development',
      description: 'Agile development process with regular updates and client feedback integration.'
    },
    {
      icon: Zap,
      title: 'Launch',
      description: 'Thorough testing, deployment, and post-launch support to ensure success.'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-gray-300">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
            <br />
            for Your Business
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end solutions that transform your ideas 
            into powerful digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card group cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.price}</span>
                  <button className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Our <span className="text-gradient">Development Process</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology that ensures quality, transparency, and timely delivery of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Step Icon */}
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-indigo-400" />
                </div>

                {/* Step Content */}
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss your project and explore how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
                <Zap className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
