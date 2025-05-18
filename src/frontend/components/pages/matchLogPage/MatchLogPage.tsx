'use client';

import React, { useEffect, useState } from 'react';
import { analyzeTeamPerf } from '@services/team-data/analyzeTeamPerf';
import { TeamPerformanceMatchLog } from 'src/frontend/types/team';
import MatchStats from '@components/match/MatchStats';
import schedule from '@data/Schedule.json'; // Add this if you want to use real data

type Props = {
  playerId: string;
};

const MatchLog: React.FC<Props> = ({ playerId }) => {
  const [logs, setLogs] = useState<TeamPerformanceMatchLog[]>([]);

  useEffect(() => {
    const loadData = async () => {
      if (!playerId) return;
      const result = analyzeTeamPerf(Number(playerId), schedule);
      setLogs(result?.matchLog ?? []);
    };
    loadData();
  }, [playerId]);

  return (
    <div className="space-y-4">
      {logs.map((match, index) => (
        <MatchStats key={index} match={match} />
      ))}
    </div>
  );
};

export default MatchLog;
