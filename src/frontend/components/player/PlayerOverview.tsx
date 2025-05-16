'use client';

import React from 'react';
import StatSummaryCards from './StatsSummaryCards';
import Past5matches from './Past5matches';
import ClubInfoCard from './ClubInfoCard';

export default function PlayerOverview() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top stat cards (Games, Goals, Assists, etc.) */}
      <StatSummaryCards />

      {/* Recent match performances */}
      <Past5matches />

      {/* Club summary block (team name, appearances, win %) */}
      <ClubInfoCard />
    </div>
  );
}