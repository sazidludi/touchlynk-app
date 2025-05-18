export interface ScheduleEntry {
  Id: number;
  TeamOneId: number;
  TeamTwoId: number;
  Date_Time: string;
  Location: string;
  HomeTeamGoal: number;
  AwayTeamGoal: number;

  // Computed fields for UI logic
  opponentName?: string;  // Friendly name of the opposing team
  gameDate?: string;      // Formatted game date string (e.g., "Jan 2, 2025")
  isHome?: boolean;       // Whether TeamOneId is the player’s team
}
