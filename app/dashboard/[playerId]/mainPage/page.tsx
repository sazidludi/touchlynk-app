import Sidebar from '@components/layout/Sidebar';
import PlayerOverview from '@components/player/PlayerOverview';

export default function PlayerOverviewPage() {
  return (
    <div className="flex min-h-screen bg-[#0f0f11] text-white">
      {/* Left Side: Custom badge-like sidebar */}
      <Sidebar />

      {/* Right Side: Scrollable main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <PlayerOverview />
      </main>
    </div>
  );
}