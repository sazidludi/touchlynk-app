// Basic player metadata extracted from TeamvsUser.json
export type PlayerInfo = {
  id: number; // Typically UserId or NewPlayerId (used interchangeably)
  firstName: string;
  lastName: string;
  jerseyNumber: string | number;
  positionCode: number;
  secondPositionCode?: number;
  photoUrl?: string;
  teamId?: string;
  appearances?: number;
  winRate?: string; // Formatted as percentage string "50%"
};

// Stats per game for a player — allows per-match breakdown
export type PlayerGameStats = {
  scheduleId: number;
  tackles: number;
  pressures: number;
  recoveries: number;
  saves: number;
  goals: number;
  shots: number;
  shotsOnTarget: number;
  assists: number;
  xGoalsEstimate: number;
  passesCompleted?: number;
  interceptions: number;
  clearances: number;
  aerialDuels: number;
  blockedShots: number;
};

// Aggregated stats for dashboard display
export type AggregatedStats = {
  totalTackles: number;
  totalPressures: number;
  totalRecoveries: number;
  totalSaves: number;
  totalGoals: number;
  totalShots: number;
  totalShotsOnTarget: number;
  totalAssists: number;
  totalXG: number;
};

// Complete dashboard data structure
export type PlayerDashboardData = {
  player: PlayerInfo;
  stats: PlayerGameStats[];
  aggregated: AggregatedStats;
};