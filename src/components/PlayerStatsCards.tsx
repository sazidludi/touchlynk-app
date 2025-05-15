import React from 'react';
import { PlayerGameStats } from '@/types/player';
import StatCircle from './StatCircle';

interface AggregatedStats {
  totalTackles: number;
  totalPressures: number;
  totalRecoveries: number;
  totalSaves: number;
  totalGoals: number;
  totalShots: number;
  totalShotsOnTarget: number;
  totalAssists: number;
  totalXG: number;
}

interface Props {
  aggregated: AggregatedStats;
  stats: PlayerGameStats[];
}

const PlayerStatsCards: React.FC<Props> = ({ aggregated, stats }) => {
  const totalGames = stats.length;

  const goalFrequency =
    aggregated.totalGoals > 0
      ? Math.round((90 * totalGames) / aggregated.totalGoals)
      : 'N/A';

  const assistFrequency =
    aggregated.totalAssists > 0
      ? Math.round((90 * totalGames) / aggregated.totalAssists)
      : 'N/A';

  const contributionCount = aggregated.totalGoals + aggregated.totalAssists;

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center">
      {/* Circular stat: Goals + Assists */}
      <StatCircle
        value={contributionCount}
        label="Goal Contributions"
        subtext={`(${aggregated.totalGoals} G + ${aggregated.totalAssists} A)`}
      />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
        <StatCard label="Games Played" value={totalGames} />
        <StatCard label="Goals" value={aggregated.totalGoals} />
        <StatCard label="Assists" value={aggregated.totalAssists} />
        <StatCard label="XG" value={aggregated.totalXG.toFixed(2)} />
        <StatCard label="Goal every ___ min" value={goalFrequency} />
        <StatCard label="Assist every ___ min" value={assistFrequency} />
        <StatCard label="Shots" value={aggregated.totalShots} />
        <StatCard label="On Target" value={aggregated.totalShotsOnTarget} />
        <StatCard label="Tackles" value={aggregated.totalTackles} />
        <StatCard label="Saves" value={aggregated.totalSaves} />
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: number | string }> = ({ label, value }) => (
  <div className="bg-white/10 rounded-xl p-4 text-center shadow-md">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

export default PlayerStatsCards;