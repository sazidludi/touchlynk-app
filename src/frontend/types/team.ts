// Team basic metadata structure
export interface TeamInfo {
  TeamId: number;
  TeamName?: string;
  AgeGroup?: string;
  Division?: string;
  ClubId?: number;
  ClubName?: string;
  Gender?: number;       // 0 = Male, 1 = Female
  TeamTypeId?: number;   // 1 = Club, 2 = High School, etc.
}

// Structure representing a team's performance in a single match
export interface TeamPerformanceMatchLog {
  scheduleId: number;              
  opponentId: number;              
  opponentName: string;           
  gameDate: string;                // e.g., "2025-01-14"
  isHome: boolean;                 
  goalsFor: number;               
  goalsAgainst: number;          

  // Key team performance stats
  possessionsInFinalThird: number;   // From GameSummaryData.PossesionsInOffensiveThird
  completedPasses: number;          // From GameSummaryData.CompletedPasses
  shots: number;                    // From GameSummaryData.Shots
  shotsOnTarget: number;           // From GameSummaryData.ShotsOnTarget
  regains: number;                 // From GameSummaryData.Regains
  avgPassPerShot: number;          // From GameSummaryData.AvgPassPerShotSeq
}
