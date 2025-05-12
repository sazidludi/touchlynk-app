// for a fully scalable and maintainable codebase, we should use a more modular approach

import { PlayerGameStats } from "@/types/player";
import defensiveStats from "@/data/DefensiveStats.json";


 // Maps playerId → list of game-by-game defensive stats
 
export function processDefensiveStats(): Map<number, PlayerGameStats[]> {
  const statsMap = new Map<number, PlayerGameStats[]>();

  for (const entry of defensiveStats) {
    const playerId = entry.PlayerId;
    const scheduleId = entry.ScheduleId;

    const stat: PlayerGameStats = {
      scheduleId,
      tackles: entry.TacklesCount,
      pressures: entry.DefensivePressures,
      recoveries: entry.IndividualRecovery,
      saves: 0, // Will be filled in by goalie processor
      goals: 0, // Will be filled in by schedule analysis
      shots: 0,
      shotsOnTarget: 0,
      assists: 0,
      xGoalsEstimate: 0,
      passesCompleted: 0,
      interceptions: entry.PassInterceptions,
      clearances: entry.Clearances,
      aerialDuels: entry.AerialDuels,
      blockedShots: entry.BlockedShots,
    };

    if (!statsMap.has(playerId)) {
      statsMap.set(playerId, []);
    }

    statsMap.get(playerId)!.push(stat);
  }

  return statsMap;
}
