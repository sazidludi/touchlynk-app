import React from 'react';
import { PlayerInfo } from '@/types/player';

interface Props {
  player: PlayerInfo;
}

const PlayerHeader: React.FC<Props> = ({ player }) => {
  return (
    <div className="bg-black/30 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
      <div className="w-32 h-32 bg-white/10 rounded-full mb-4 flex items-center justify-center text-2xl font-bold">
        #{player.jerseyNumber}
      </div>
      <h2 className="text-2xl font-semibold">{player.firstName} {player.lastName}</h2>
      <p className="text-sm text-purple-200 mt-1">Position Code: {player.positionCode}</p>
      {player.secondPositionCode && (
        <p className="text-xs text-gray-400">Also plays: {player.secondPositionCode}</p>
      )}
      <div className="mt-4 text-xs text-gray-300">
        <p>ID: {player.id}</p>
      </div>
    </div>
  );
};

export default PlayerHeader;
