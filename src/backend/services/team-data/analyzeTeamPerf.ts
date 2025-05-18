import { ScheduleEntry } from 'src/frontend/types/schedule';

export interface MatchResult {
  opponentId: number;
  date: string;
  goalsFor: number;
  goalsAgainst: number;
  result: 'W' | 'L' | 'D';
}

export interface TeamPerformance {
  matchLog: never[];
  totalGames: number;
  wins: number;
  losses: number;
  draws: number;
  goalsScored: number;
  goalsConceded: number;
  goalDifference: number;
  winRate: number;
  averageGoalsPerGame: number;
  matchResults: MatchResult[];
}

export function analyzeTeamPerf(teamId: number, schedule: ScheduleEntry[]): TeamPerformance {
  const matchResults: MatchResult[] = [];

  let wins = 0;
  let losses = 0;
  let draws = 0;
  let goalsScored = 0;
  let goalsConceded = 0;

  for (const match of schedule) {
    const isHome = match.TeamOneId === teamId;
    const isAway = match.TeamTwoId === teamId;

    if (!isHome && !isAway) continue;

    const goalsFor = isHome ? match.HomeTeamGoal : match.AwayTeamGoal;
    const goalsAgainst = isHome ? match.AwayTeamGoal : match.HomeTeamGoal;
    const opponentId = isHome ? match.TeamTwoId : match.TeamOneId;

    let result: 'W' | 'L' | 'D' = 'D';
    if (goalsFor > goalsAgainst) result = 'W';
    else if (goalsFor < goalsAgainst) result = 'L';

    if (result === 'W') wins++;
    else if (result === 'L') losses++;
    else draws++;

    goalsScored += goalsFor;
    goalsConceded += goalsAgainst;

    matchResults.push({
      opponentId,
      date: match.Date_Time,
      goalsFor,
      goalsAgainst,
      result,
    });
  }

  const totalGames = wins + losses + draws;
  const winRate = totalGames > 0 ? wins / totalGames : 0;
  const averageGoalsPerGame = totalGames > 0 ? goalsScored / totalGames : 0;

  return {
    totalGames,
    wins,
    losses,
    draws,
    goalsScored,
    goalsConceded,
    goalDifference: goalsScored - goalsConceded,
    winRate,
    averageGoalsPerGame,
    matchResults,
    matchLog: []
};
}
