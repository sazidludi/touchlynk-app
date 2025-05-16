import capturedGoalies from '@data/CapturedGoalies.json';
import scheduleAnalysis from '@data/Scheduleanalysis.json';

// Ensure scheduleAnalysis is typed as an array
const scheduleAnalysisArray: any[] = scheduleAnalysis as any[];
import { PlayerGameStats } from '@/types/player';


 //Processes goalie data and returns stats per player per match.

export function processGoalieStats(): Map<number, PlayerGameStats[]> {
  const goalieMap = new Map<number, PlayerGameStats[]>();

  // Go through all goalies that appeared in games
  for (const entry of capturedGoalies) {
    const userId = entry.UserId;
    const scheduleId = entry.ScheduleId;

    if (!userId || !scheduleId) continue;

    if (!goalieMap.has(userId)) {
      goalieMap.set(userId, []);
    }

    const existing = goalieMap.get(userId)!;
    let stat = existing.find(s => s.scheduleId === scheduleId);

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
      existing.push(stat);
    }

    goalieMap.set(userId, existing);
  }
  for (const event of scheduleAnalysisArray) {
    // Add saves based on ScheduleAnalysis ResultId = 4 (Save), by GoaliePlayerId
    const scheduleEvents = scheduleAnalysis as any[];
    for (const event of scheduleAnalysisArray) {
      if (event.ResultId === 4 && typeof event.GoaliePlayerId === 'number') {
        const goalieId = event.GoaliePlayerId;
        const scheduleId = event.ScheduleId;

        if (!goalieMap.has(goalieId)) {
          goalieMap.set(goalieId, []);
        }

        const stats = goalieMap.get(goalieId)!;
        let gameStat = stats.find(s => s.scheduleId === scheduleId);
        if (!gameStat) {
          gameStat = {
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
          stats.push(gameStat);
        }

        gameStat.saves += 1;
      }
    }
  }

  return goalieMap;
}
