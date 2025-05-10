'use client';

import { useEffect, useState } from 'react';
import teamvsUser from '@/data/TeamvsUser.json';
import defensiveStats from '@/data/DefensiveStats.json';
import capturedGoalies from '@/data/CapturedGoalies.json';
import scheduleAnalysis from '@/data/ScheduleAnalysis.json';

type Props = {
  playerId: string;
};

type Player = {
  UserId: number;
  FirstName: string;
  LastName: string;
  JerseyNo: number | string;
  Position: number;
};

export default function PlayerDashboard({ playerId }: Props) {
  const [player, setPlayer] = useState<Player | null>(null);
  const [stats, setStats] = useState<any>({});
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    const id = parseInt(playerId);

    // Find player metadata
    const playerRecord = teamvsUser.find((p: any) => p.UserId === id);
    if (!playerRecord) {
      setPlayer(null);
      return;
    }

    setPlayer({
      UserId: playerRecord.UserId,
      FirstName: playerRecord.FirstName,
      LastName: playerRecord.LastName,
      JerseyNo: playerRecord.JerseyNo,
      Position: playerRecord.Position,
    });

    // Defensive Stats
    const def = defensiveStats.filter((entry: any) => entry.PlayerId === id);
    const saves = scheduleAnalysis.filter((entry: any) => entry.GoaliePlayerId === id).length;
    const tackles = def.reduce((sum: number, d: any) => sum + d.TacklesCount, 0);
    const pressures = def.reduce((sum: number, d: any) => sum + d.DefensivePressures, 0);
    const recoveries = def.reduce((sum: number, d: any) => sum + d.IndividualRecovery, 0);

    setStats({
      saves,
      tackles,
      pressures,
      recoveries,
    });

    const goalieGames = capturedGoalies.filter((g: any) => g.UserId === id);
    setGames(goalieGames.map((g: any) => g.ScheduleId));
  }, [playerId]);

  if (!player) {
    return (
      <div className="text-red-600">
        {/* Red text for error indication */}
        Player not found for ID {playerId}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 border rounded-xl shadow bg-white text-black">
      {/* White background*/}
      {/* Black text*/}

      <div className="flex items-center gap-4 mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold">
          {/* Light gray background for player avatar circle */}
          #{player.JerseyNo}
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{player.FirstName} {player.LastName}</h1>
          <p className="text-sm text-gray-600">
            {/* Gray text for subtext like position */}
            Position Code: {player.Position}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-sm">
        <div className="bg-gray-100 p-4 rounded">
          {/* Light gray background for stat boxes */}
          <p className="text-xl font-semibold">{stats.tackles}</p>
          <p>Tackles</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-xl font-semibold">{stats.pressures}</p>
          <p>Pressures</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-xl font-semibold">{stats.recoveries}</p>
          <p>Recoveries</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-xl font-semibold">{stats.saves}</p>
          <p>Saves (Goalie Events)</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Games Appeared In:</h2>
        <ul className="list-disc list-inside text-sm">
          {games.length > 0 ? (
            games.map((g) => <li key={g}>Game ID: {g}</li>)
          ) : (
            <li>No games recorded as goalie</li>
          )}
        </ul>
      </div>
    </div>
  );
}
