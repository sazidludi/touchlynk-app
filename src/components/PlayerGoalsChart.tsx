import React from 'react';
import { PlayerGameStats } from '@/types/player';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { ResultIdMap } from '@/lib/playerActionMapper';

interface Props {
  stats: PlayerGameStats[];
}

const PlayerGoalsChart: React.FC<Props> = ({ stats }) => {
  const chartData = stats.map(stat => ({
    game: `#${stat.scheduleId}`,
    goals: stat.goals,
    tooltipLabel: `Goals: ${stat.goals}`,
  }));

  return (
    <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Goals by Game</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="game" tick={{ fill: '#ccc' }} />
          <YAxis tick={{ fill: '#ccc' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#222', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            formatter={(value) => [`${value}`, 'Goals']}
          />
          <Bar dataKey="goals" fill="#9333ea" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlayerGoalsChart;
