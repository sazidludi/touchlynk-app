'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Activity, Move, Target } from 'lucide-react';
import teamvsUser from '../../data/TeamvsUser.json';
import defensiveStats from '../../data/DefensiveStats.json';
import scheduleAnalysis from '../../data/Scheduleanalysis.json';
import capturedGoalies from '../../data/CapturedGoalies.json';

type Props = {
  playerId: string;
};

export default function PlayerDashboard({ playerId }: Props) {
  const [player, setPlayer] = useState<any>(null);
  const [stats, setStats] = useState({ tackles: 0, pressures: 0, recoveries: 0, saves: 0 });
  const [games, setGames] = useState<number[]>([]);

  useEffect(() => {
    const id = parseInt(playerId);

    const playerRecord = teamvsUser.find((p: any) => p.UserId === id);
    if (!playerRecord) return;

    setPlayer(playerRecord);

    const def = defensiveStats.filter((entry: any) => entry.PlayerId === id);
    const saves = scheduleAnalysis.filter((entry: any) => entry.GoaliePlayerId === id).length;

    const tackles = def.reduce((sum: number, d: any) => sum + d.TacklesCount, 0);
    const pressures = def.reduce((sum: number, d: any) => sum + d.DefensivePressures, 0);
    const recoveries = def.reduce((sum: number, d: any) => sum + d.IndividualRecovery, 0);

    setStats({ tackles, pressures, recoveries, saves });

    const goalieGames = capturedGoalies.filter((g: any) => g.UserId === id).map((g: any) => g.ScheduleId);
    setGames(goalieGames);
  }, [playerId]);

  if (!player) {
    return <div className="text-red-600">Player not found.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mb-6 bg-[#1a1b1f] text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            #{player.JerseyNo} {player.FirstName} {player.LastName}
          </CardTitle>
          <p className="text-sm text-gray-400">Position Code: {player.Position}</p>
        </CardHeader>
      </Card>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-[#1f2128] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm">Tackles</CardTitle>
            <ShieldCheck className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.tackles}</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1f2128] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm">Pressures</CardTitle>
            <Activity className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.pressures}</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1f2128] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm">Recoveries</CardTitle>
            <Move className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.recoveries}</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1f2128] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm">Saves</CardTitle>
            <Target className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.saves}</p>
          </CardContent>
        </Card>
      </section>

      <Card className="mt-6 bg-[#1a1b1f] text-white">
        <CardHeader>
          <CardTitle>Games Appeared In</CardTitle>
        </CardHeader>
        <CardContent>
          {games.length > 0 ? (
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-300">
              {games.map((g) => (
                <li key={g}>Game ID: {g}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">No games recorded as goalie.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
