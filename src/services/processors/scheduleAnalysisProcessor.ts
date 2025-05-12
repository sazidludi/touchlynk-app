import scheduleAnalysis from '/data/Scheduleanalysis.json';
import { PlayerGameStats } from '@/types/player';

// Estimate xG from ShotFromId if ResultId is a goal
function estimateXG(shotFromId: number, resultId: number): number {
  if (resultId !== 1) return 0; // Only award xG for actual goals
  switch (shotFromId) {
    case 1: return 0.5;  // Inside the 6-yard box
    case 2: return 0.3;  // Inside the box
    case 3: return 0.15; // Outside the box
    default: return 0;
  }
}

export function processScheduleAnalysisStats(
    scheduleAnalysis: any[], // Assuming scheduleAnalysis is an array of objects
    statsMap: Map<number, PlayerGameStats[]>
): Map<number, PlayerGameStats[]> {
  const localStatsMap = new Map<number, PlayerGameStats[]>();

  for (const event of scheduleAnalysis) {
    const scheduleId = event.ScheduleId;
    const playerId = event.NewPlayerId;
    const assistId = event.NewAssistPlayerId;
    const resultId = event.ResultId;
    const shotFromId = event.ShotFromId;

    // Process primary player event (shot taker or scorer)
    if (typeof playerId === 'number') {
      if (!localStatsMap.has(playerId)) localStatsMap.set(playerId, []);
      const playerStats = localStatsMap.get(playerId)!;

      let stat = playerStats.find(s => s.scheduleId === scheduleId);
      if (!stat) {
        stat = {
          scheduleId,
          tackles: 0,
          pressures: 0,
          recoveries: 0,
          saves: 0,
          goals: 0,
          shots: 0,
          shotsOnTarget: 0,
          assists: 0,
          xGoalsEstimate: 0,
          passesCompleted: 0,
          interceptions: 0,
          clearances: 0,
          aerialDuels: 0,
          blockedShots: 0,
        };
        playerStats.push(stat);
      }

      // Shot/Goal logic
      if ([1, 4, 5, 6].includes(resultId)) {
        stat.shots += 1;
      }
      if (resultId === 4) {
        stat.shotsOnTarget += 1;
      }
      if (resultId === 1) {
        stat.goals += 1;
        stat.xGoalsEstimate += estimateXG(shotFromId, resultId);
      }
    }

    // Process assist (if available)
    if (typeof assistId === 'number') {
      if (!localStatsMap.has(assistId)) localStatsMap.set(assistId, []);
      const assistStats = localStatsMap.get(assistId)!;

      let stat = assistStats.find(s => s.scheduleId === scheduleId);
      if (!stat) {
        stat = {
          scheduleId,
          tackles: 0,
          pressures: 0,
          recoveries: 0,
          saves: 0,
          goals: 0,
          shots: 0,
          shotsOnTarget: 0,
          assists: 0,
          xGoalsEstimate: 0,
          passesCompleted: 0,
          interceptions: 0,
          clearances: 0,
          aerialDuels: 0,
          blockedShots: 0,
        };
        assistStats.push(stat);
      }

      stat.assists += 1;
    }
  }

  return localStatsMap;
}
