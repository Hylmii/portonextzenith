'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Star, Quote, ArrowLeft, ArrowRight, 
  Play, Pause, User, Building, MapPin 
} from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'CTO',
      company: 'TechFlow Inc.',
      location: 'Singapore',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Nextzenith Ventures Mi Room transformed our digital presence completely. Their expertise in both UI/UX design and backend development is exceptional. The team delivered beyond our expectations.',
      project: 'E-commerce Platform Redesign',
      result: '300% increase in conversion rate'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      position: 'Founder & CEO',
      company: 'StartupLab',
      location: 'San Francisco',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Working with this team was a game-changer for our startup. They not only built our mobile app but also provided strategic insights that helped us secure Series A funding.',
      project: 'Mobile App Development',
      result: '$2M Series A raised'
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      position: 'Head of IT',
      company: 'MedTech Solutions',
      location: 'Toronto',
      avatar: '👩‍⚕️',
      rating: 5,
      text: 'The security audit and compliance implementation they provided was thorough and professional. Our healthcare data is now fully protected and HIPAA compliant.',
      project: 'Security Audit & Compliance',
      result: '100% HIPAA compliance achieved'
    },
    {
      id: 4,
      name: 'James Thompson',
      position: 'VP of Technology',
      company: 'FinanceCore',
      location: 'London',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Their cloud infrastructure solution scaled our platform seamlessly. We now handle 10x more transactions with improved performance and reliability.',
      project: 'Cloud Infrastructure',
      result: '10x transaction capacity'
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Product Manager',
      company: 'EduTech Global',
      location: 'Seoul',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'The analytics dashboard they built gives us real-time insights into our user behavior. Data-driven decisions have never been easier to make.',
      project: 'Analytics Platform',
      result: '90% faster decision making'
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '50+', label: 'Projects Delivered', icon: '🚀' },
    { number: '15+', label: 'Countries Served', icon: '🌍' },
    { number: '24/7', label: 'Support Available', icon: '⏰' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
            <br />
            About Our Work
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with Nextzenith Ventures Mi Room.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center card">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Slider */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="glass-dark p-8 lg:p-12 rounded-3xl relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-indigo-400" />
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Client Info */}
                <div className="lg:col-span-1">
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mb-4">
                      {currentTestimonial.avatar}
                    </div>
                    
                    {/* Client Details */}
                    <h3 className="text-xl font-bold text-white mb-1">{currentTestimonial.name}</h3>
                    <p className="text-indigo-400 mb-1">{currentTestimonial.position}</p>
                    <p className="text-gray-400 text-sm mb-2">{currentTestimonial.company}</p>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{currentTestimonial.location}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Project Info */}
                    <div className="p-4 bg-gray-800/50 rounded-xl w-full">
                      <p className="text-xs text-gray-400 mb-1">Project:</p>
                      <p className="text-sm text-white font-medium mb-2">{currentTestimonial.project}</p>
                      <p className="text-xs text-green-400">{currentTestimonial.result}</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <blockquote className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={prevSlide}
                        className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                      >
                        <ArrowLeft className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      <button
                        onClick={togglePlayPause}
                        className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Play className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                      >
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? 'bg-indigo-400 w-8'
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Testimonials Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`card cursor-pointer transition-all duration-300 ${
                    currentSlide === index ? 'ring-2 ring-indigo-400' : 'hover:scale-105'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    "{testimonial.text.slice(0, 80)}..."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's create something amazing together and make your project our next success story.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Start Your Success Story
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
