'use client';

import React from 'react';
import { 
  Code2, Mail, Phone, MapPin, ArrowRight,
  Twitter, Github, Linkedin, Instagram, Globe,
  Heart, ExternalLink, Calendar, Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailContact = () => {
    const subject = "General Inquiry - NextZenith Ventures";
    const body = `Hello NextZenith Team,

I hope this message finds you well. I'm reaching out regarding:

[Please describe your inquiry here]

Looking forward to hearing from you.

Best regards,
[Your Name]`;
    
    const mailtoLink = `mailto:hello@nextzenith.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#' },
  ];

  const services = [
    { name: 'UI/UX Design', href: '#' },
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Development', href: '#' },
    { name: 'Cyber Security', href: '#' },
    { name: 'Cloud Solutions', href: '#' },
    { name: 'Consulting', href: '#' },
  ];

  const resources = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const achievements = [
    { icon: Award, text: 'Top Web Design Agency 2024' },
    { icon: Globe, text: 'Serving 15+ Countries' },
    { icon: Calendar, text: 'Est. 2020' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nextzenith</h3>
                  <p className="text-sm text-gray-400">Ventures Mi Room</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming ideas into powerful digital experiences through innovative design, 
                robust development, and strategic thinking.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <button 
                  onClick={handleEmailContact}
                  className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">hello@nextzenith.com</span>
                </button>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm">Jakarta, Indonesia</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                    <achievement.icon className="w-3 h-3 text-indigo-400" />
                    <span>{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3 mb-8">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{resource.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="glass p-4 rounded-xl">
                <h5 className="text-sm font-semibold text-white mb-3">Stay Updated</h5>
                <p className="text-xs text-gray-400 mb-4">
                  Get the latest news and updates from our team.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button 
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                    onClick={() => {
                      const emailInput = document.querySelector('input[placeholder="Your email"]') as HTMLInputElement;
                      if (emailInput && emailInput.value) {
                        alert(`Thank you for subscribing with email: ${emailInput.value}`);
                        emailInput.value = '';
                      } else {
                        alert('Please enter your email address.');
                      }
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Nextzenith Ventures Mi Room. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>in Indonesia</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Built with Next.js & Tailwind CSS</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg z-50 group"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 -rotate-90 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
