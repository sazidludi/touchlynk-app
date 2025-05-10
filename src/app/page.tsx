'use client';

import Link from 'next/link';
import { FaUser, FaUsers } from 'react-icons/fa'; // for icons

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f1123] text-white flex flex-col items-center justify-center px-4">
      {/* bg-[#0f1123] = deep navy background */}
      
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
        Welcome to TouchLynk
      </h1>
      <p className="text-gray-400 text-center max-w-xl mb-12">
        Your central hub for comprehensive player and team analytics. Dive deep
        into statistics, track performance, and gain valuable insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Player View Card */}
        <div className="bg-[#1b1d34] p-6 rounded-xl w-80 shadow-lg">
          {/* bg-[#1b1d34] = card background */}
          <div className="flex items-center gap-3 mb-4">
            <FaUser className="text-purple-400 text-xl" /> {/* icon color */}
            <h2 className="text-xl font-semibold">Individual Player View</h2>
          </div>
          <Link
            href="/player-login"
            className="block bg-[#6366f1] hover:bg-[#4f46e5] text-white text-center py-2 rounded-md font-medium mb-2 transition"
          >
            View My Stats →
            {/* bg-[#6366f1] = button background
                hover:bg-[#4f46e5] = darker hover
                text-white = button text */}
          </Link>
          <p className="text-sm text-gray-400 text-center">
            Currently showing data for: <span className="italic">Player Name</span>
          </p>
        </div>

        {/* Coach View Card */}
        <div className="bg-[#1b1d34] p-6 rounded-xl w-80 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FaUsers className="text-purple-400 text-xl" />
            <h2 className="text-xl font-semibold">Team Analytics View</h2>
          </div>
          <Link
            href="/team-login"
            className="block bg-[#6366f1] hover:bg-[#4f46e5] text-white text-center py-2 rounded-md font-medium mb-2 transition"
          >
            Analyze Team Stats →
          </Link>
          <p className="text-sm text-gray-400 text-center">
            Currently showing data for: <span className="italic">Michigan United</span>
          </p>
        </div>
      </div>

      <p className="text-gray-500 mt-12 text-sm text-center">
        Navigate using the options above or use the main menu for more sections once you've made a selection.
      </p>
    </div>
  );
}
