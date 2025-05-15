// mapping PlayerActions definiitons to scheduleanalysis

type LookupMap = Record<number, string>;

export const ResultIdMap: LookupMap = {
  1: "Goal",
  3: "No Shot",
  4: "Save",
  5: "Shot off Target",
  6: "Blocked Shot",
};

export const DefensiveEventIdMap: LookupMap = {
  1: "Defensive Pressure",
  2: "Tackle",
  3: "Blocked Shot",
  4: "Clearance",
  5: "Aerial Duel",
  6: "No Defense Stat",
};

export const MasterEventIdMap: LookupMap = {
  1: "Pass",
  2: "Tackle",
  3: "Clearance",
  4: "Deflection",
  5: "Blocked Shot",
  6: "Bad Trap",
  7: "Header",
  8: "Cross",
  9: "Goal Stat",
  10: "Throw In",
  11: "Punt",
  12: "Hand Pass",
  13: "Goal Kick",
  14: "Deleted",
};

export const AssistFromIdMap: LookupMap = {
  1: "Build Up Play Through Middle",
  2: "Cross From Left",
  3: "Cross From Right",
  4: "Corners",
  5: "Free Kick",
  6: "Penalty Kick",
  7: "Own Goal",
  8: "Turnover",
  9: "Left Channel",
  10: "Right Channel",
  11: "Penetrating Pass",
};
