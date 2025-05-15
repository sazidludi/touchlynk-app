import React from 'react';
import { PlayerGameStats } from '@/types/player';
import {
  ResultIdMap,
  AssistFromIdMap,
  MasterEventIdMap,
  DefensiveEventIdMap,
} from '@/lib/playerActionMapper';

interface Props {
  stats: PlayerGameStats[];
}

const PlayerMatchLog: React.FC<Props> = ({ stats }) => {
  return (
    <div className="bg-white/10 rounded-2xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Match Log</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-purple-300 border-b border-purple-700">
            <th className="text-left py-2">Game</th>
            <th className="text-left py-2">Goals</th>
            <th className="text-left py-2">Assists</th>
            <th className="text-left py-2">Shots</th>
            <th className="text-left py-2">Saves</th>
            <th className="text-left py-2">XG</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat => (
            <tr key={stat.scheduleId} className="border-b border-gray-700">
              <td className="py-2">#{stat.scheduleId}</td>
              <td className="py-2">{stat.goals}</td>
              <td className="py-2">{stat.assists}</td>
              <td className="py-2">{stat.shots}</td>
              <td className="py-2">{stat.saves}</td>
              <td className="py-2">{stat.xGoalsEstimate.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerMatchLog;
