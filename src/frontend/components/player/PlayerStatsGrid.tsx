'use client';

import React, { useState } from 'react';
import StatDetailModal from '../ui/StatDetailModel';
import { getMatchStats, getGoalStats } from '@services/statDetails';

// stat cards at top of mainPage 
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
  {
    label: 'Assists',
    value: 3,
    color: 'text-yellow-400',
    detailTitle: 'Assists Breakdown',
    detailContent: getGoalStats,
  },
  {
    label: 'Win %',
    value: '67%',
    color: 'text-yellow-400',
    detailTitle: 'Win Percentage',
    detailContent: () => <p>Win percentage details...</p>,
  },
  {
    label: 'Clean Sheets',
    value: 5,
    color: 'text-yellow-400',
    detailTitle: 'Clean Sheets Breakdown',
    detailContent: () => <p>Clean sheets details...</p>,
  },
  {
    label: 'Avg Rating',
    value: '7.3',
    color: 'text-yellow-400',
    detailTitle: 'Average Rating Breakdown',
    detailContent: () => <p>Average rating details...</p>,
  },
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
            //color for stat cards on main page top of page
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