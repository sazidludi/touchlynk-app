"use client";

import Link from "next/link"; // <-- Required to navigate between routes

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Welcome to TouchLynk</h1>

      {/* Player Dashboard Button */}
      <Link
        href="/player-login"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
      >
        Player Dashboard
      </Link>

      {/* Team Dashboard Button */}
      <Link
        href="/team-login"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
        Team Dashboard
      </Link>
    </div>
  );
}
