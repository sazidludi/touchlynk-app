'use client';

import React from 'react';

const statData = [
  { label: 'Games', value: 18 },
  { label: 'Goals', value: 6 },
  { label: 'Assists', value: 3 },
  { label: 'Win %', value: '67%' },
  { label: 'Clean Sheets', value: 5 },
  { label: 'Avg Rating', value: '7.3' },
];

export default function StatSummaryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {statData.map((stat, i) => (
        <div
          key={i}
          className="bg-[#1b1d2a] p-5 rounded-xl shadow-md flex flex-col items-center text-white"
        >
          <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
          <p className="text-2xl font-bold text-yellow-300">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}