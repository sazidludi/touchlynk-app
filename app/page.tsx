'use client';

import Link from 'next/link';
import { FaUser, FaUsers } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0609] to-[#1e0d1c] text-white px-4 py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to TouchLynk
        </h1>

        <p className="text-zinc-400 max-w-xl mb-12">
          Your central hub for comprehensive player and team analytics. Dive deep into statistics, track performance, and gain valuable insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Player View Card */}
          <div className="bg-[#161826] p-6 rounded-xl w-80 shadow-xl border border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-yellow-400 text-xl" />
              <h2 className="text-lg font-semibold text-white">Individual Player View</h2>
            </div>

            <Link
              href="/player-login"
              className="block bg-zinc-800 hover:bg-zinc-700 text-white text-center py-2 rounded-md font-medium transition"
            >
              View My Stats →
            </Link>

            <p className="text-sm text-zinc-400 text-center mt-2">
              Currently showing data for: <span className="italic text-white">Player Name</span>
            </p>
          </div>

          {/* Team View Card */}
          <div className="bg-[#161826] p-6 rounded-xl w-80 shadow-xl border border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-yellow-400 text-xl" />
              <h2 className="text-lg font-semibold text-white">Team Analytics View</h2>
            </div>

            <Link
              href="/team-login"
              className="block bg-zinc-800 hover:bg-zinc-700 text-white text-center py-2 rounded-md font-medium transition"
            >
              Analyze Team Stats →
            </Link>

            <p className="text-sm text-zinc-400 text-center mt-2">
              Currently showing data for: <span className="italic text-white">Michigan United</span>
            </p>
          </div>
        </div>

        <p className="text-zinc-500 text-sm max-w-md">
          Navigate using the options above or use the main menu for more sections once you've made a selection.
        </p>
      </div>
    </div>
  );
}
