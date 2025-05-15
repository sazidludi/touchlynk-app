'use client';

import React, { useMemo, useState } from 'react';
import { generatePlayerDashboardData } from '@/services/player-data';
import PlayerHeader from './PlayerHeader';
import PlayerStatsCards from './PlayerStatsCards';
import PlayerGoalsChart from './PlayerGoalsChart';
import PlayerFilters from './PlayerFilters';
import { FilterOption } from '@/types/filters';
import { PlayerDashboardData } from '@/types/player';
import { aggregateStats } from '@/services/processors/aggregation';

interface Props {
  playerId: string;
}

const PlayerDashboard: React.FC<Props> = ({ playerId }) => {
  const allPlayerData = generatePlayerDashboardData();
  const playerData = useMemo(
    () => allPlayerData.find(p => p.player.id.toString() === playerId),
    [playerId]
  );

  const [filter, setFilter] = useState<FilterOption>('ALL');

  const filteredStats = useMemo(() => {
    if (!playerData) return [];

    switch (filter) {
      case 'LAST_5':
        return playerData.stats.slice(-5);
      case 'LAST_10':
        return playerData.stats.slice(-10);
      case 'ALL':
      default:
        return playerData.stats;
    }
  }, [playerData, filter]);

  if (!playerData) {
    return <div className="text-center text-white p-6">Player not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1f005c] to-[#5b0060] text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <PlayerHeader player={playerData.player} />
        </div>

        <div className="col-span-2 flex flex-col gap-6">
          <PlayerFilters selected={filter} onChange={setFilter} />

          <PlayerStatsCards aggregated={aggregateStats(filteredStats)} stats={filteredStats} />

          <PlayerGoalsChart stats={filteredStats} />
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;
