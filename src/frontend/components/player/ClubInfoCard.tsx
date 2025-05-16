'use client';

import React from 'react';

// Placeholder props (can replace with real data bindings later)
const teamName = 'Michigan United';
const appearances = 18;
const winRate = '67%';

export default function ClubInfoCard() {
  return (
    <div className="bg-[#1b1d2a] rounded-xl shadow-md p-5 flex items-center gap-4">
      {/* Optional: team logo */}
      <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
        MU
      </div>

      {/* Team details */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-400">Club</p>
        <h3 className="text-xl font-bold">{teamName}</h3>
        <p className="text-xs text-gray-400 mt-1">{appearances} appearances • {winRate} win rate</p>
      </div>
    </div>
  );
}