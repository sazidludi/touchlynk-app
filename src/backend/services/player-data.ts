import type { PlayerDashboardData, PlayerInfo, PlayerGameStats } from 'src/frontend/types/player';

// Raw data imports
import teamvsUser from '@data/TeamvsUser.json';
import defensiveStats from '@data/DefensiveStats.json';
import scheduleAnalysis from '@data/Scheduleanalysis.json';

// Ensure scheduleAnalysis is typed as an array
const scheduleAnalysisArray: any[] = Array.isArray(scheduleAnalysis) ? scheduleAnalysis : [];
import capturedGoalies from '@data/CapturedGoalies.json';
import schedule from '@data/Schedule.json';

// Modular stat processors
import { processDefensiveStats } from './processors/defensiveStatsProcessors';
import { processGoalieStats } from './processors/goalieStatsProcessor';
import { processScheduleAnalysisStats } from './processors/scheduleAnalysisProcessor';

// Aggregation utility
import { aggregateStats } from './processors/aggregation';

// Main function to build complete dashboard per player
export function generatePlayerDashboardData(): PlayerDashboardData[] {
  const statsMap = processDefensiveStats();

  const goalieStats = processGoalieStats();
  goalieStats.forEach((stats, playerId) => {
    const existing = statsMap.get(playerId) || [];
    statsMap.set(playerId, [...existing, ...stats]);
  });

  processScheduleAnalysisStats(scheduleAnalysisArray, statsMap);

  const result: PlayerDashboardData[] = [];

  for (const [playerId, stats] of statsMap.entries()) {
    const player = teamvsUser.find(p => p.UserId === playerId);
    if (!player) continue;

    const playerInfo: PlayerInfo = {
      id: player.UserId,
      firstName: player.FirstName,
      lastName: player.LastName,
      jerseyNumber: player.JerseyNo,
      positionCode: player.Position,
      secondPositionCode: player.SecondPosition,
      teamId: String(player.TeamId),
      appearances: stats.length,
    };

    const aggregated = aggregateStats(stats);

    result.push({
      player: playerInfo,
      stats,
      aggregated,
    });
  }

  return result;
}
