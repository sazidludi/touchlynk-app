import PlayerDashboard from '@/components/PlayerDashboard';

type Props = {
  params: {
    playerId: string;
  };
};

export default function PlayerDashboardDetailsPage({ params }: Props) {
  return <PlayerDashboard playerId={params.playerId} />;
}


// basically brings in player dashboard, too lazy to reroute so just importing it here
// full stats and charts dashboard page