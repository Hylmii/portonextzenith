'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, ArrowRight, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home', icon: Sparkles },
    { name: 'About', href: '#about', icon: Code2 },
    { name: 'Services', href: '#services', icon: Zap },
    { name: 'Portfolio', href: '#portfolio', icon: Code2 },
    { name: 'Contact', href: '#contact', icon: ArrowRight },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark backdrop-blur-2xl' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group">
                <Code2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Nextzenith
              </h1>
              <p className="text-xs text-gray-400 font-mono">Ventures Mi Room</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-ghost text-sm">
              Let's Talk
            </button>
            <button className="btn-primary text-sm">
              Start Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-800">
              <button className="btn-ghost justify-center">
                Let's Talk
              </button>
              <button className="btn-primary justify-center">
                Start Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
    </header>
  );
};

export default Header;
