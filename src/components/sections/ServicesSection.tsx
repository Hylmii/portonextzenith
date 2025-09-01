'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, Palette, Shield, Globe, Database, Cloud, 
  Smartphone, BarChart3, Zap, CheckCircle, ArrowRight,
  Layers, Settings, Users
} from 'lucide-react';
import ServiceModal from '@/components/ui/ServiceModal';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning interfaces that enhance user experience and drive engagement.',
      fullDescription: 'We craft exceptional digital experiences through user-centered design methodology, combining aesthetic excellence with functional efficiency to create interfaces that users love and businesses value.',
      features: ['User Research & Analysis', 'Information Architecture', 'Wireframing & Prototyping', 'Visual Design Systems', 'Usability Testing', 'Design Handoff'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Suite', 'Principle', 'InVision', 'Miro', 'UserTesting'],
      process: [
        'Discovery & Research - Understanding your users and business goals',
        'Information Architecture - Structuring content and user flows',
        'Wireframing - Creating low-fidelity layouts and interactions',
        'Visual Design - Developing high-fidelity mockups and style guides',
        'Prototyping - Building interactive demos for testing',
        'Testing & Iteration - Validating designs with real users'
      ],
      deliverables: [
        'User Research Reports',
        'User Personas & Journey Maps', 
        'Wireframes & User Flows',
        'High-fidelity Mockups',
        'Interactive Prototypes',
        'Design System Documentation',
        'Developer Handoff Files'
      ],
      benefits: [
        'Increased user engagement and satisfaction',
        'Reduced development time and costs',
        'Improved conversion rates',
        'Enhanced brand perception',
        'Competitive advantage in the market'
      ],
      timeline: '4-8 weeks',
      teamSize: '2-3 designers',
      color: 'from-purple-500 to-pink-500',
      price: 'Starting at $2,500',
      caseStudy: {
        title: 'E-commerce Platform Redesign',
        description: 'Complete UX overhaul for a major retailer resulting in significant improvement in user metrics.',
        results: [
          '45% increase in conversion rate',
          '60% reduction in cart abandonment',
          '40% improvement in user engagement',
          '25% increase in average order value'
        ]
      }
    },
    {
      id: 2,
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications built with modern technologies for optimal performance and scalability.',
      fullDescription: 'We build robust, scalable web applications using cutting-edge technologies and best practices, ensuring your digital presence is fast, secure, and ready to grow with your business.',
      features: ['Responsive Web Design', 'Progressive Web Apps', 'E-commerce Solutions', 'Content Management Systems', 'API Integration', 'Performance Optimization'],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Vercel'],
      process: [
        'Planning & Architecture - Defining technical requirements and system design',
        'Frontend Development - Building responsive user interfaces',
        'Backend Development - Creating robust server-side functionality',
        'Database Design - Structuring and optimizing data storage',
        'API Integration - Connecting with third-party services',
        'Testing & Deployment - Quality assurance and production launch'
      ],
      deliverables: [
        'Fully Responsive Website',
        'Admin Dashboard (if applicable)',
        'Database Setup & Configuration',
        'API Documentation',
        'Source Code & Documentation',
        'Deployment & Hosting Setup',
        'Training & Support Materials'
      ],
      benefits: [
        'Scalable and maintainable codebase',
        'Fast loading times and optimal performance',
        'SEO-friendly architecture',
        'Mobile-first responsive design',
        'Secure and reliable infrastructure'
      ],
      timeline: '6-12 weeks',
      teamSize: '3-4 developers',
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting at $5,000',
      caseStudy: {
        title: 'SaaS Platform Development',
        description: 'Built a comprehensive project management platform serving 10,000+ users with real-time collaboration features.',
        results: [
          '99.9% uptime reliability',
          'Sub-2 second page load times',
          'Handles 50,000+ concurrent users',
          'Zero security incidents in 2 years'
        ]
      }
    },
    {
      id: 3,
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      fullDescription: 'We develop high-performance mobile applications for iOS and Android platforms, utilizing native and cross-platform technologies to reach your audience wherever they are.',
      features: ['iOS Native Development', 'Android Native Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications', 'Offline Functionality'],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'SQLite', 'Core Data', 'RESTful APIs'],
      process: [
        'Concept & Strategy - Defining app goals and target audience',
        'UI/UX Design - Creating mobile-optimized user experiences',
        'Native Development - Building platform-specific features',
        'Backend Integration - Connecting with server infrastructure',
        'Testing & QA - Ensuring quality across devices',
        'App Store Submission - Publishing and maintenance'
      ],
      deliverables: [
        'Native iOS Application',
        'Native Android Application',
        'App Store Listings',
        'Backend API Integration',
        'Push Notification System',
        'Analytics Implementation',
        'Maintenance & Support Plan'
      ],
      benefits: [
        'Native performance and user experience',
        'Access to device-specific features',
        'Offline functionality capabilities',
        'Optimized for app store discovery',
        'Regular updates and maintenance'
      ],
      timeline: '8-16 weeks',
      teamSize: '2-4 developers',
      color: 'from-green-500 to-emerald-500',
      price: 'Starting at $8,000'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.',
      fullDescription: 'We provide end-to-end cybersecurity services to protect your business from threats, ensure compliance, and maintain the trust of your customers through robust security measures.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Security Training', 'Incident Response', 'Risk Assessment'],
      technologies: ['OWASP', 'Nmap', 'Metasploit', 'Wireshark', 'Burp Suite', 'AWS Security', 'SSL/TLS', 'OAuth 2.0'],
      process: [
        'Security Assessment - Identifying vulnerabilities and risks',
        'Policy Development - Creating security protocols and procedures',
        'Implementation - Deploying security measures and tools',
        'Training & Awareness - Educating your team on best practices',
        'Monitoring & Maintenance - Continuous security oversight',
        'Incident Response - Rapid response to security events'
      ],
      deliverables: [
        'Security Audit Report',
        'Vulnerability Assessment',
        'Security Policy Documentation',
        'Implementation Roadmap',
        'Staff Training Materials',
        'Incident Response Plan',
        'Ongoing Monitoring Setup'
      ],
      benefits: [
        'Protection against cyber threats',
        'Regulatory compliance assurance',
        'Reduced risk of data breaches',
        'Enhanced customer trust',
        'Business continuity protection'
      ],
      timeline: '6-10 weeks',
      teamSize: '2-3 specialists',
      color: 'from-red-500 to-orange-500',
      price: 'Starting at $3,000'
    },
    {
      id: 5,
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions for modern application deployment.',
      fullDescription: 'We help businesses leverage cloud technologies to improve scalability, reduce costs, and enhance operational efficiency through strategic cloud migration and optimization.',
      features: ['Cloud Migration', 'DevOps Implementation', 'Container Orchestration', 'Auto-scaling Solutions', 'Monitoring & Logging', 'Disaster Recovery'],
      technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI', 'Prometheus'],
      process: [
        'Cloud Strategy - Assessing current infrastructure and planning migration',
        'Architecture Design - Creating scalable cloud architecture',
        'Migration Planning - Developing step-by-step migration strategy',
        'Implementation - Executing cloud deployment and configuration',
        'Optimization - Fine-tuning performance and costs',
        'Monitoring & Support - Ongoing management and optimization'
      ],
      deliverables: [
        'Cloud Architecture Documentation',
        'Migration Strategy & Timeline',
        'Infrastructure as Code Templates',
        'CI/CD Pipeline Setup',
        'Monitoring & Alerting Systems',
        'Disaster Recovery Plan',
        'Cost Optimization Report'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security and compliance',
        'Faster deployment and updates',
        'Better disaster recovery capabilities'
      ],
      timeline: '8-14 weeks',
      teamSize: '2-4 engineers',
      color: 'from-purple-500 to-indigo-500',
      price: 'Starting at $4,000'
    },
    {
      id: 6,
      icon: BarChart3,
      title: 'Business Solutions',
      description: 'Custom business applications and analytics solutions to streamline operations and drive growth.',
      fullDescription: 'We create tailored business solutions that automate processes, provide actionable insights, and help organizations make data-driven decisions to achieve their strategic goals.',
      features: ['CRM Systems', 'Analytics Dashboards', 'Process Automation', 'Data Integration', 'Reporting Tools', 'Workflow Management'],
      technologies: ['Power BI', 'Tableau', 'Salesforce', 'Microsoft Dynamics', 'Python', 'R', 'SQL Server', 'API Integrations'],
      process: [
        'Business Analysis - Understanding current processes and pain points',
        'Solution Design - Creating custom business solution architecture',
        'Data Integration - Connecting and consolidating data sources',
        'Development - Building custom applications and dashboards',
        'Training & Adoption - Ensuring successful user adoption',
        'Optimization - Continuous improvement and support'
      ],
      deliverables: [
        'Custom Business Application',
        'Interactive Dashboards',
        'Data Integration Solutions',
        'Process Documentation',
        'User Training Materials',
        'Support & Maintenance Plan',
        'Performance Analytics Setup'
      ],
      benefits: [
        'Streamlined business operations',
        'Data-driven decision making',
        'Improved productivity and efficiency',
        'Better customer relationship management',
        'Competitive advantage through insights'
      ],
      timeline: '10-16 weeks',
      teamSize: '3-5 specialists',
      color: 'from-orange-500 to-red-500',
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
              key={service.id}
              className={`card group cursor-pointer transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleServiceClick(service)}
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

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.price}</span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300 hover:underline"
                    >
                      View Details
                    </button>
                    <button className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
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

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
};

export default ServicesSection;
