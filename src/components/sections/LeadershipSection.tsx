"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Crown,
  Users,
  Award,
  Linkedin,
  Twitter,
  Mail,
  Briefcase,
  GraduationCap,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import LeadershipModal from "@/components/ui/LeadershipModal";
import ProfileAvatar from "@/components/ui/ProfileAvatar";

const LeadershipSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<any>(null);
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

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const handleScheduleMeeting = () => {
    // Create meeting scheduling functionality
    const subject = "Strategic Partnership Meeting Request";
    const body = `Hello NextZenith Leadership Team,

I would like to schedule a meeting to discuss:
- Strategic partnerships
- Investment opportunities
- Business collaboration

Please let me know your availability for the next few weeks.

Best regards,`;
    
    const mailtoLink = `mailto:ceo@nextzenith.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleViewCareers = () => {
    // Scroll to contact section or open careers page
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Alternative: Open LinkedIn careers page
      window.open('https://www.linkedin.com/company/nextzenith-ventures/jobs/', '_blank');
    }
  };

  const leadership = [
    {
      id: 1,
      name: "Hylmi Rafif Rabbani, S.Kom., M.B.A.",
      position: "Chief Executive Officer",
      shortTitle: "CEO",
      avatar: "/images/Hylmi-profile.JPG", // Profile photo
      description:
        "Visionary leader driving digital transformation and innovation across the technology landscape.",
      expertise: [
        "Strategic Leadership",
        "Digital Transformation",
        "Business Development",
        "Innovation Management",
      ],
      experience: "10+ Years",
      education: "MBA in Technology Management",
      achievements: [
        "Built 5+ successful startups",
        "Led $10M+ in funding rounds",
        "Tech Industry Speaker",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ceo@nextzenith.com",
      },
      color: "from-purple-500 to-indigo-600",
      stats: [
        { label: "Companies Founded", value: "5+" },
        { label: "Team Members Led", value: "100+" },
        { label: "Projects Delivered", value: "200+" },
      ],
    },
    {
      id: 2,
      name: "Hafizhul Akmal", // Will be filled by user
      position: "Direktur Utama",
      shortTitle: "Director",
      avatar: "👩‍💼",
      description:
        "Strategic operations director ensuring excellence in project delivery and organizational growth.",
      expertise: [
        "Operations Management",
        "Project Leadership",
        "Team Development",
        "Quality Assurance",
      ],
      experience: "8+ Years",
      education: "Masters in Business Administration",
      achievements: [
        "Scaled operations by 300%",
        "ISO certification leader",
        "Award-winning project manager",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "director@nextzenith.com",
      },
      color: "from-blue-500 to-cyan-600",
      stats: [
        { label: "Projects Managed", value: "150+" },
        { label: "Client Satisfaction", value: "99%" },
        { label: "Team Growth", value: "300%" },
      ],
    },
    {
      id: 3,
      name: "Abdul Raoef Yudha Kurnia", // Will be filled by user
      position: "Komisaris Utama",
      shortTitle: "Commissioner",
      avatar: "👨‍💻",
      description:
        "Senior advisor providing strategic guidance and governance oversight for sustainable business growth.",
      expertise: [
        "Corporate Governance",
        "Strategic Planning",
        "Risk Management",
        "Investment Strategy",
      ],
      experience: "15+ Years",
      education: "PhD in Business Strategy",
      achievements: [
        "Board member at 10+ companies",
        "Investment committee chair",
        "Industry thought leader",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "commissioner@nextzenith.com",
      },
      color: "from-green-500 to-emerald-600",
      stats: [
        { label: "Board Positions", value: "10+" },
        { label: "Investment Decisions", value: "$50M+" },
        { label: "Strategic Initiatives", value: "25+" },
      ],
    },
  ];

  const companyValues = [
    {
      icon: Target,
      title: "Vision-Driven",
      description: "Clear strategic direction with measurable outcomes",
    },
    {
      icon: Users,
      title: "People-First",
      description: "Empowering teams to achieve extraordinary results",
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description: "Continuous improvement and sustainable expansion",
    },
    {
      icon: Award,
      title: "Excellence-Focused",
      description: "Uncompromising commitment to quality and innovation",
    },
  ];

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-slide-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Crown className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">
              Leadership Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-gradient">Visionary Leaders</span>
            <br />
            Driving Innovation Forward
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our experienced leadership team combines strategic vision with
            hands-on expertise to guide Nextzenith Ventures Mi Room toward
            continued success and innovation.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {leadership.map((member, index) => (
            <div
              key={member.id}
              className={`card group cursor-pointer transition-all duration-500 hover:scale-105 ${
                isVisible ? "animate-slide-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => handleMemberClick(member)}
            >
              {/* Header with Avatar and Title */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 rounded-2xl`}
                ></div>

                {/* Avatar */}
                <div className="relative z-10 flex flex-col items-center pt-6">
                  {member.id === 1 ? (
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full p-1 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <ProfileAvatar
                        src={member.avatar}
                        alt={member.name}
                        size={72}
                        className="border-2 border-white/20"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {member.avatar}
                    </div>
                  )}

                  {/* Title Badge */}
                  <div
                    className={`px-3 py-1 bg-gradient-to-r ${member.color} text-white text-xs font-semibold rounded-full mb-2`}
                  >
                    {member.shortTitle}
                  </div>

                  {/* Name and Position */}
                  <h3 className="text-xl font-bold text-white text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 text-center mb-4">
                    {member.position}
                  </p>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
                    <span className="text-xs text-gray-400">
                      Active Leadership
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {member.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-lg font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Expertise Tags */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 2 && (
                    <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md">
                      +{member.expertise.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Experience and Education */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Briefcase className="w-3 h-3" />
                  <span>{member.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <GraduationCap className="w-3 h-3" />
                  <span>{member.education}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-gray-400" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  >
                    <Twitter className="w-4 h-4 text-gray-400" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 text-gray-400" />
                  </a>
                </div>

                {/* View Profile Link */}
                <button
                  className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMemberClick(member);
                  }}
                >
                  View Full Profile →
                </button>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Our <span className="text-gradient">Leadership Principles</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The core values that guide our leadership team in making strategic
              decisions and driving company growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Work with Our Leadership Team?
            </h3>
            <p className="text-gray-400 mb-6">
              Connect with our experienced leaders to discuss strategic
              partnerships, investment opportunities, or career prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={handleScheduleMeeting}
              >
                Schedule a Meeting
                <Crown className="w-4 h-4" />
              </button>
              <button 
                className="btn-secondary"
                onClick={handleViewCareers}
              >
                View Career Opportunities
                <Users className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Modal */}
      <LeadershipModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default LeadershipSection;
