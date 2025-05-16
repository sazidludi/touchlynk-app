import scheduleAnalysis from '@data/Scheduleanalysis.json';
import { ResultIdMap, AssistFromIdMap, MasterEventIdMap, DefensiveEventIdMap } from '@/lib/playerActionMapper';
import { PlayerGameStats } from '@/types/player';

// Maps NewPlayerId to array of PlayerGameStats
export function processScheduleAnalysisStats(
  data: any[],
  statsMap: Map<number, PlayerGameStats[]>
): void {
  data.forEach(event => {
    const type = event.Type;
    const playerId: number = event.NewPlayerId || event.DefensivePlayerID || event.GoaliePlayerId;
    const scheduleId: number = event.ScheduleId;

    if (!playerId || !scheduleId) return;

    const resultLabel = ResultIdMap[event.ResultId];
    const assistType = AssistFromIdMap[event.AssistFromId];
    const actionName = MasterEventIdMap[event.MasterOffensiveEventId];
    const defenseAction = DefensiveEventIdMap[event.MasterDefensiveEventId];

    const existing = statsMap.get(playerId) || [];
    let gameStat = existing.find(s => s.scheduleId === scheduleId);

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
        interceptions: 0,
        clearances: 0,
        aerialDuels: 0,
        blockedShots: 0,
      };
      existing.push(gameStat);
    }

    // Only process goal event logic for Type === 1 (Goal Events)
    if (type === 1) {
      if (resultLabel === 'Goal') gameStat.goals++;
      if (actionName === 'Shot' || resultLabel) gameStat.shots++;
      if (['Save', 'Shot off Target', 'Blocked Shot'].includes(resultLabel)) gameStat.shotsOnTarget++;
      if (assistType) gameStat.assists++;
      if (resultLabel) gameStat.xGoalsEstimate += 0.15; // Simplified xG logic
    }

    // Defensive actions for players with DefensivePlayerID
    if (event.DefensivePlayerID && defenseAction) {
      switch (defenseAction) {
        case 'Tackle':
          gameStat.tackles++;
          break;
        case 'Blocked Shot':
          gameStat.blockedShots++;
          break;
        case 'Clearance':
          gameStat.clearances++;
          break;
        case 'Aerial Duel':
          gameStat.aerialDuels++;
          break;
        case 'Defensive Pressure':
          gameStat.pressures++;
          break;
      }
    }

    // Goalie saves
    if (event.GoaliePlayerId && resultLabel === 'Save') {
      gameStat.saves++;
    }

    statsMap.set(playerId, existing);
  });
}
