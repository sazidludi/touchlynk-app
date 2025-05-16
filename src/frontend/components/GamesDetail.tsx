'use client';
import React, { useState } from 'react';
import StatDetailModal from './StatDetailModel';

const matchStats = [
  { date: 'May 4', opponent: 'Chelsea', result: 'W 3-1', goals: 1, assists: 0, rating: 8.2 },
  { date: 'Apr 27', opponent: 'Man City', result: 'L 1-2', goals: 0, assists: 1, rating: 7.1 },
  // Add more match data...
];

export default function GamesDetailCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-[#161826] rounded-xl p-4 text-center cursor-pointer hover:ring-2 hover:ring-yellow-500 transition"
        onClick={() => setOpen(true)}
      >
        <p className="text-sm text-white/70">Games</p>
        <p className="text-xl font-bold text-yellow-400">18</p>
      </div>

      <StatDetailModal isOpen={open} onClose={() => setOpen(false)} title="All Matches Played">
        <div className="space-y-3">
          {matchStats.map((match, i) => (
            <div key={i} className="bg-[#1c1f2e] p-4 rounded-lg flex justify-between text-sm text-white">
              <div>{match.date}</div>
              <div>{match.opponent}</div>
              <div>{match.result}</div>
              <div>G: {match.goals}</div>
              <div>A: {match.assists}</div>
              <div>⭐ {match.rating}</div>
            </div>
          ))}
        </div>
      </StatDetailModal>
    </>
  );
}
