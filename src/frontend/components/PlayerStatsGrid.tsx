'use client';

import React, { useState } from 'react';
import StatDetailModal from './StatDetailModel';
import { getMatchStats, getGoalStats } from '@services/statDetails';

const stats = [
  {
    label: 'Games',
    value: 18,
    color: 'text-yellow-400',
    detailTitle: 'All Matches Played',
    detailContent: getMatchStats,
  },
  {
    label: 'Goals',
    value: 6,
    color: 'text-yellow-400',
    detailTitle: 'Goals Breakdown',
    detailContent: getGoalStats,
  },
  // Add more stat objects here...
];

export default function PlayerStatsGrid() {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            onClick={() => setActiveStat(i)}
            className="bg-[#161826] rounded-xl p-4 text-center cursor-pointer hover:ring-2 hover:ring-yellow-500 transition"
          >
            <p className="text-sm text-white/70">{stat.label}</p>
            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {activeStat !== null && (
        <StatDetailModal
          isOpen={true}
          onClose={() => setActiveStat(null)}
          title={stats[activeStat].detailTitle}
        >
          {stats[activeStat].detailContent()}
        </StatDetailModal>
      )}
    </>
  );
}