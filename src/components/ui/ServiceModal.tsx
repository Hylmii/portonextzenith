'use client';

import React, { useEffect, useRef } from 'react';
import { 
  X, ExternalLink, CheckCircle, Star, ArrowRight,
  Clock, Users, Award, TrendingUp, Zap, Shield,
  Code, Smartphone, Palette, Cloud, Database, Lock
} from 'lucide-react';

interface ServiceDetail {
  id: number;
  title: string;
  icon: any;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  process: string[];
  deliverables: string[];
  timeline: string;
  teamSize: string;
  price: string;
  color: string;
  benefits: string[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
}

interface ServiceModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const IconComponent = service.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"></div>
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl animate-slide-up"
      >
        {/* Header */}
        <div className={`relative p-8 bg-gradient-to-br ${service.color} rounded-t-3xl`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">{service.timeline}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">{service.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Star className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">{service.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <div className="glass-dark p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="glass-dark p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  Development Process
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              {service.caseStudy && (
                <div className="glass-dark p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-400" />
                    Case Study
                  </h3>
                  <h4 className="text-xl font-semibold text-white mb-3">{service.caseStudy.title}</h4>
                  <p className="text-gray-300 mb-4">{service.caseStudy.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-white">Results:</h5>
                    {service.caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="glass-dark p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="glass-dark p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-green-400" />
                  Deliverables
                </h3>
                <div className="space-y-3">
                  {service.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="glass-dark p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Benefits
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`p-6 bg-gradient-to-br ${service.color} rounded-2xl text-center`}>
                <h3 className="text-xl font-bold text-white mb-3">Ready to Get Started?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Let's discuss your project requirements and create something amazing together.
                </p>
                <button 
                  className="w-full px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors duration-300"
                  onClick={() => {
                    onClose();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
