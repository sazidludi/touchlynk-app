'use client';

import React from 'react';
import PlayerShieldCard from '@components/player/PlayerShieldCard';
import PlayerStatsGrid from '@components/player/PlayerStatsGrid';
import GamesDetail from '@components/player/GamesDetail';

export default function MainPage() {
  return (
    <div className="space-y-6">
      {/* Player Header */}
      <div className="flex gap-6">
        {/* Left: Shield + Basic Info */}


        {/* Right: Stats */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          <PlayerStatsGrid />
          <GamesDetail />
        </div>
      </div>

      {/* More sections can go here: recent matches, club info */}
    </div>
  );
}
