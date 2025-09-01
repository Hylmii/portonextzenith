'use client';

import React, { useEffect, useRef } from 'react';
import { 
  X, Linkedin, Twitter, Mail, Phone, MapPin, Calendar,
  Award, Users, TrendingUp, Star, Briefcase, GraduationCap,
  Target, Zap, Globe, MessageCircle, Clock, ChevronRight
} from 'lucide-react';
import ProfileAvatar from '@/components/ui/ProfileAvatar';
import CompanyMap from '@/components/ui/CompanyMap';

interface LeadershipMember {
  id: number;
  name: string;
  position: string;
  shortTitle: string;
  avatar: string;
  description: string;
  expertise: string[];
  experience: string;
  education: string;
  achievements: string[];
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
  color: string;
  stats: Array<{ label: string; value: string }>;
}

interface LeadershipModalProps {
  member: LeadershipMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const LeadershipModal: React.FC<LeadershipModalProps> = ({ member, isOpen, onClose }) => {
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

  if (!isOpen || !member) return null;

  const additionalInfo = {
    phone: '+1 (555) 123-4567',
    location: 'Jakarta, Indonesia',
    timezone: 'WIB (UTC+7)',
    languages: ['Indonesian', 'English', 'Mandarin'],
    certifications: ['PMP Certified', 'Agile Scrum Master', 'AWS Certified'],
    interests: ['Technology Innovation', 'Startup Mentoring', 'Digital Transformation'],
    workingHours: '09:00 - 18:00 WIB',
    responseTime: '< 2 hours',
    availability: 'Available for meetings',
    recentProjects: [
      'NextGen AI Platform Launch',
      'Digital Banking Transformation',
      'E-commerce Scaling Initiative'
    ],
    teamSize: member.id === 1 ? '25 Direct Reports' : member.id === 2 ? '15 Direct Reports' : '5 Advisory Teams',
    budget: member.id === 1 ? '$10M+ Annual Budget' : member.id === 2 ? '$5M+ Project Budget' : '$50M+ Investment Portfolio'
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"></div>
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 animate-slide-up overflow-hidden"
      >
        {/* Header */}
        <div className={`relative bg-gradient-to-r ${member.color} p-6`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              {member.id === 1 ? (
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/30">
                  <ProfileAvatar
                    src={member.avatar}
                    alt={member.name}
                    size={80}
                    className="border-2 border-white/30"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl border border-white/30">
                  {member.avatar}
                </div>
              )}
              
              {/* Basic Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                <p className="text-xl text-white/90 mb-2">{member.position}</p>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{additionalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{additionalInfo.timezone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
                    <span className="text-sm">{additionalInfo.availability}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-300 border border-white/30"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  About {member.name.split(' ')[0]}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">{member.description}</p>
                <p className="text-gray-400 text-sm">
                  {member.name} brings {member.experience} of experience in driving organizational excellence 
                  and fostering innovation. Known for strategic thinking and hands-on leadership approach, 
                  consistently delivering exceptional results across multiple industries.
                </p>
              </div>

              {/* Core Expertise */}
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Core Expertise
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {member.expertise.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Projects */}
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Recent Key Projects
                </h3>
                <div className="space-y-3">
                  {additionalInfo.recentProjects.map((project, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300">{project}</span>
                      <ChevronRight className="w-4 h-4 text-gray-500 ml-auto" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Key Stats */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Key Metrics
                </h3>
                <div className="space-y-4">
                  {member.stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                    <div className="text-lg font-bold text-white mb-1">{additionalInfo.teamSize}</div>
                    <div className="text-xs text-gray-400">Team Leadership</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                    <div className="text-lg font-bold text-white mb-1">{additionalInfo.budget}</div>
                    <div className="text-xs text-gray-400">Budget Oversight</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <a href={`mailto:${member.social.email}`} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 border border-gray-700/30">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">{member.social.email}</span>
                  </a>
                  <a href={`tel:${additionalInfo.phone}`} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 border border-gray-700/30">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{additionalInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{additionalInfo.workingHours}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                    <MessageCircle className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-300 text-sm">Response: {additionalInfo.responseTime}</span>
                  </div>
                </div>
              </div>

              {/* Company Location Map */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-400" />
                  Office Location
                </h3>
                <CompanyMap location={additionalInfo.location} />
                <div className="mt-3 p-3 bg-gray-800/20 rounded-lg border border-gray-700/20">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium text-white">Nextzenith Ventures Mi Room</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">
                    Business District, Kota Depok, West Java, Indonesia
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">UTC+7 Timezone</span>
                    <span className="text-green-400">• Office Hours: 09:00 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-400" />
                  Social & Professional
                </h3>
                <div className="space-y-3">
                  <a href={member.social.linkedin} className="flex items-center gap-3 p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors duration-300 border border-blue-500/30">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">LinkedIn Profile</span>
                    <ChevronRight className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                  <a href={member.social.twitter} className="flex items-center gap-3 p-3 bg-sky-600/20 rounded-lg hover:bg-sky-600/30 transition-colors duration-300 border border-sky-500/30">
                    <Twitter className="w-4 h-4 text-sky-400" />
                    <span className="text-gray-300 text-sm">Twitter Profile</span>
                    <ChevronRight className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                </div>
              </div>

              {/* Languages & Certifications */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-yellow-400" />
                  Languages & Certs
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {additionalInfo.languages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md border border-gray-700">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {additionalInfo.certifications.map((cert, index) => (
                        <div key={index} className="text-xs text-gray-400">{cert}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full btn-primary justify-center">
                  <Calendar className="w-4 h-4" />
                  Schedule Meeting
                </button>
                <button className="w-full btn-secondary justify-center">
                  <MessageCircle className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipModal;
