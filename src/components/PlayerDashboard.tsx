'use client';

import React from 'react';
import { PlayerDashboardData } from '@/types/player';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { generatePlayerDashboardData } from '@/services/player-data';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts';

type Props = {
  playerId: string;
};

const PlayerDashboard: React.FC<Props> = ({ playerId }) => {
  const data = generatePlayerDashboardData();
  const player = data.find(p => p.player.id.toString() === playerId);

  if (!player) return <p className="text-white">Player not found.</p>;

  const { player: info, stats, aggregated } = player;

  return (
    <div className="space-y-6 text-white">
      {/* Player Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            #{info.jerseyNumber} {info.firstName} {info.lastName}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Position: {info.positionCode}
          </p>
        </CardHeader>
      </Card>

      {/* Aggregated Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          ['Tackles', aggregated.totalTackles],
          ['Pressures', aggregated.totalPressures],
          ['Recoveries', aggregated.totalRecoveries],
          ['Saves', aggregated.totalSaves],
          ['Goals', aggregated.totalGoals],
          ['Shots', aggregated.totalShots],
          ['Shots On Target', aggregated.totalShotsOnTarget],
          ['Assists', aggregated.totalAssists],
          ['xG', aggregated.totalXG.toFixed(2)],
        ].map(([label, value]) => (
          <Card key={label}>
            <CardHeader>
              <CardTitle className="text-base">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Game-by-Game Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Game Stats Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="scheduleId" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="goals" fill="#8884d8" name="Goals" />
              <Bar dataKey="assists" fill="#82ca9d" name="Assists" />
              <Bar dataKey="xGoalsEstimate" fill="#ffc658" name="xG" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerDashboard;
