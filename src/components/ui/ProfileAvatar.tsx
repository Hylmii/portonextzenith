'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProfileAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  src, 
  alt, 
  size = 80, 
  className = '' 
}) => {
  const [imageError, setImageError] = useState(false);

  // Fallback to initials if image fails to load
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  if (imageError || !src.startsWith('/images/')) {
    return (
      <div 
        className={`relative overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-white font-bold" style={{ fontSize: size * 0.3 }}>
          {getInitials(alt)}
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-full bg-gray-800 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        style={{
          objectPosition: 'center 30%', // Adjust focus on face area for better proportion
        }}
        sizes={`${size}px`}
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default ProfileAvatar;
