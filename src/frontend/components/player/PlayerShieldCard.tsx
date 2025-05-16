import Image from "next/image";
import React from "react";

interface PlayerShieldCardProps {
  name: string;
  role?: string;
  position?: string;
  imageUrl: string;
  width?: number;
  height?: number;
  gradientFrom?: string;
  gradientTo?: string;
  strokeColor?: string;
  strokeWidth?: number;
  shapePath?: string;
}

export default function PlayerShieldCard({
  name,
  role = "Trainer",
  position = "Midfielder",
  imageUrl,
  width = 240,
  height = 420,
  gradientFrom = "#3a0d2d",
  gradientTo = "#1a0318",
  strokeColor = "#ffce00",
  strokeWidth = 4,
  shapePath = "M10,10 Q120,-20 230,10 L230,270 Q120,340 10,270 Z",
}: PlayerShieldCardProps) {
  return (
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
    >
      {/* Background SVG Shield */}
      <svg
        viewBox="0 0 240 360"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 z-0 w-full h-full"
      >
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <path
          d={shapePath}
          fill="url(#shieldGradient)"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* Player image in fixed-size box */}
    <div
    className="absolute z-10 left-1/2 transform -translate-x-1/2 overflow-hidden rounded-t-lg"
    style={{
    top: "32px",
    width: "180px",
    height: "200px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    maskImage: "linear-gradient(to bottom, black 80%, transparent 98%)",
  }}
>
  <img
    src={imageUrl}
    alt={name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top center",
    }}
  />
    </div>



      {/* Gradient overlay on bottom */}
    <div className="absolute bottom-30 w-full text-center text-white z-30">
    <p className="text-xl font-bold">{name}</p>
    <p className="text-sm text-white/80 mt-1">{role}</p>
    <p className="text-sm text-white/50 mt-1">#4 — {position}</p>
    </div>

    </div>
  );
}
