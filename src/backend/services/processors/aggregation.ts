import { PlayerGameStats } from "@/types/player";

// Utility to aggregate a player's stats across all games
//Total stats for a player
export function aggregateStats(stats: PlayerGameStats[]) {
  return stats.reduce(
    (acc, game) => {
      acc.totalTackles += game.tackles;
      acc.totalPressures += game.pressures;
      acc.totalRecoveries += game.recoveries;
      acc.totalSaves += game.saves;
      acc.totalGoals += game.goals;
      acc.totalShots += game.shots;
      acc.totalShotsOnTarget += game.shotsOnTarget;
      acc.totalAssists += game.assists;
      acc.totalXG += game.xGoalsEstimate;
      acc.totalPassesCompleted += game.passesCompleted ?? 0;
      acc.totalInterceptions += game.interceptions;
      acc.totalClearances += game.clearances;
      acc.totalAerialDuels += game.aerialDuels;
      acc.totalBlockedShots += game.blockedShots;
      return acc;
    },
    {
      totalTackles: 0,
      totalPressures: 0,
      totalRecoveries: 0,
      totalSaves: 0,
      totalGoals: 0,
      totalShots: 0,
      totalShotsOnTarget: 0,
      totalAssists: 0,
      totalXG: 0,
      totalPassesCompleted: 0,
      totalInterceptions: 0,
      totalClearances: 0,
      totalAerialDuels: 0,
      totalBlockedShots: 0,
    }
  );
}
