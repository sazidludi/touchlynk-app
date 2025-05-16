'use client';

import React from 'react';

// Mocked placeholder data for the last 5 matches
const pastMatches = [
  { opponent: 'Chelsea', result: 'W 3-1', date: 'May 4' },
  { opponent: 'Man City', result: 'L 1-2', date: 'Apr 27' },
  { opponent: 'Everton', result: 'W 2-0', date: 'Apr 20' },
  { opponent: 'Spurs', result: 'D 1-1', date: 'Apr 13' },
  { opponent: 'Liverpool', result: 'L 0-1', date: 'Apr 6' },
];

export default function Past5matches() {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <h3 className="text-xl font-bold mb-3">Past 5 Matches</h3>
      <div className="flex gap-4">
        {pastMatches.map((match, i) => (
          <div
            key={i}
            className="min-w-[160px] bg-[#1b1d2a] p-4 rounded-xl shadow text-center border border-gray-700"
          >
            <p className="text-sm text-gray-400 mb-1">{match.date}</p>
            <p className="text-lg font-bold">vs {match.opponent}</p>
            <p className="text-yellow-300 mt-1 font-semibold">{match.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}