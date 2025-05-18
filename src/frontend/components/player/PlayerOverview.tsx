'use client';

import React from 'react';
import PlayerStatsGrid from '@components/player/PlayerStatsGrid'; //Import the new dynamic grid
import Past5matches from './Past5matches';
import ClubInfoCard from './ClubInfoCard';

export default function PlayerOverview() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top stat cards (Games, Goals, Assists, etc.) */}
      <PlayerStatsGrid /> {/*Replaces StatSummaryCards */}

      {/* Recent match performances */}
      <Past5matches />

      {/* Club summary block (team name, appearances, win %) */}
      <ClubInfoCard teamName={''} appearances={0} winRate={''} />
    </div>
  );
}
