import PlayerDashboard from '@/components/PlayerDashboard';

type Props = {
  params: {
    playerId: string;
  };
};

export default function PlayerDashboardPage({ params }: Props) {
  return <PlayerDashboard playerId={params.playerId} />;
}
