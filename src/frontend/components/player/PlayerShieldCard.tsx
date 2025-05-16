import Image from 'next/image';
import React from 'react';

// Props for now — just takes a player name and image path
interface PlayerShieldCardProps {
  name: string;
  role?: string;
  imageUrl: string;
}

export default function PlayerShieldCard({ name, role = 'Trainer', imageUrl }: PlayerShieldCardProps) {
  return (
    <div className="relative w-72 h-[420px]">
      {/* Background Shield SVG */}
      <svg
        viewBox="0 0 240 360"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full z-0"
      >
        <path
          d="M10,10 Q120,-20 230,10 L230,270 Q120,340 10,270 Z"
          fill="#7e2350" // deep maroon
          stroke="#ffce00" // gold
          strokeWidth="4"
        />
      </svg>

      {/* Player image - free floating over card */}
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 z-10 w-48 h-64">
        <Image
          src={imageUrl}
          alt="player"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Name + Role */}
      <div className="absolute bottom-10 w-full text-center z-20 text-white px-4">
        <p className="text-sm font-semibold tracking-wide uppercase text-white/80">{role}</p>
        <p className="text-2xl font-bold -mt-1">{name}</p>
      </div>
    </div>
  );
}
