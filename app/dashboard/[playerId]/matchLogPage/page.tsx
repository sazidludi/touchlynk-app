'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import MatchLog from '@components/pages/matchLogPage/MatchLogPage';

export default function MatchLogPage() {
  const { playerId } = useParams();

  if (!playerId || Array.isArray(playerId)) return <div>Invalid player</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Match Log</h1>
      <MatchLog playerId={playerId} />
    </div>
  );
}
