// Basic player metadata extracted from TeamvsUser.json
export type PlayerInfo = {
  id: number; // Typically UserId or NewPlayerId (used interchangeably)
  firstName: string;
  lastName: string;
  jerseyNumber: string | number;
  positionCode: number;
  secondPositionCode?: number;
  photoUrl?: string;
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

  xGoalsEstimate: number; // Derived from ShotFromId + ResultId logic
  passesCompleted?: number; // Optional: from PlayerActions if available

  interceptions: number;
  clearances: number;
  aerialDuels: number;
  blockedShots: number;
};

// This represents all data shown on the player's dashboard
export type PlayerDashboardData = {
  player: PlayerInfo;
  stats: PlayerGameStats[]; // One entry per game
  aggregated: {
    totalTackles: number;
    totalPressures: number;
    totalRecoveries: number;
    totalSaves: number;

    totalGoals: number;
    totalShots: number;
    totalShotsOnTarget: number;
    totalAssists: number;

    totalXG: number; // Total estimated xG from all games combined
  };
};
