'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  ExternalLink, Github, Play, Eye, Filter, 
  Code, Palette, Shield, Globe, Smartphone, BarChart3,
  ArrowRight, Star, Calendar, Users
} from 'lucide-react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'UI/UX', icon: Palette },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: 'web',
      description: 'Modern admin dashboard for e-commerce platform with real-time analytics and inventory management.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      rating: 4.9,
      duration: '3 months',
      teamSize: 4,
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Cross-platform mobile application for healthcare management with telemedicine features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      rating: 4.8,
      duration: '4 months',
      teamSize: 5,
      featured: true
    },
    {
      id: 3,
      title: 'Financial Security Platform',
      category: 'security',
      description: 'Enterprise-grade security platform with advanced threat detection and compliance monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'Redis', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      rating: 5.0,
      duration: '6 months',
      teamSize: 6,
      featured: false
    },
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'design',
      description: 'Complete brand identity and design system for a tech startup including logo, guidelines, and assets.',
      image: '/api/placeholder/600/400',
      technologies: ['Figma', 'Adobe Creative Suite', 'Design Tokens'],
      liveUrl: '#',
      githubUrl: '#',
      rating: 4.9,
      duration: '2 months',
      teamSize: 3,
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Platform',
      category: 'analytics',
      description: 'Real-time data analytics platform with machine learning insights and interactive visualizations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      rating: 4.7,
      duration: '5 months',
      teamSize: 7,
      featured: true
    },
    {
      id: 6,
      title: 'Social Media Platform',
      category: 'web',
      description: 'Modern social media platform with real-time messaging, content sharing, and community features.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      rating: 4.6,
      duration: '8 months',
      teamSize: 8,
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Eye className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-gray-300">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Featured Work</span>
            <br />
            & Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative solutions that have transformed businesses 
            and delivered exceptional results for our clients.
          </p>
        </div>

        {/* Featured Projects Preview */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className="card group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl text-gray-600">
                      {project.category === 'web' && <Code />}
                      {project.category === 'mobile' && <Smartphone />}
                      {project.category === 'design' && <Palette />}
                      {project.category === 'security' && <Shield />}
                      {project.category === 'analytics' && <BarChart3 />}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <div className="flex gap-3">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <Github className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{project.rating}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-400">{project.duration}</span>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description.slice(0, 80)}...
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card group cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl text-gray-600">
                    {project.category === 'web' && <Code />}
                    {project.category === 'mobile' && <Smartphone />}
                    {project.category === 'design' && <Palette />}
                    {project.category === 'security' && <Shield />}
                    {project.category === 'analytics' && <BarChart3 />}
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{project.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <button className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  <button className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                    <Github className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's work together to bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <button className="btn-primary">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
