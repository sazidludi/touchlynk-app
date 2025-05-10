'use client';

import { useParams } from 'next/navigation';
import PlayerDashboard from '@/components/PlayerDashboard';

export default function PlayerPage() {
  const { playerId } = useParams();

  return (
    <div className="p-4">
      <PlayerDashboard playerId={playerId as string} />
    </div>
  );
}
