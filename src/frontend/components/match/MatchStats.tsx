import React from 'react';
import { TeamPerformanceMatchLog } from 'src/frontend/types/team';

type Props = {
  match: TeamPerformanceMatchLog;
};

const MatchStats: React.FC<Props> = ({ match }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 shadow-md">
      <div className="flex justify-between text-white mb-2">
        <span className="font-bold">{match.opponentName}</span>
        <span>
          {match.goalsFor} - {match.goalsAgainst}
        </span>
      </div>
      <div className="grid grid-cols-2 text-sm text-zinc-300 gap-y-1">
        <div>Possessions in Offensive 3rd: {match.possessionsInFinalThird}</div>
        <div>Completed Passes: {match.completedPasses}</div>
        <div>Shots: {match.shots}</div>
        <div>Shots on Target: {match.shotsOnTarget}</div>
        <div>Regains: {match.regains}</div>
        <div>Avg Passes/Shot: {match.avgPassPerShot}</div>
      </div>
    </div>
  );
};

export default MatchStats;
