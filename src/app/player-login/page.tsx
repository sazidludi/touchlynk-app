'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PlayerLoginPage() {
  const router = useRouter();
  const [playerId, setPlayerId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerId.trim()) {
      router.push(`/dashboard/${playerId}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0f172a] text-white">
      {/* bg-[#0f172a] = dark background color */}
      {/* text-white = default text color for dark theme */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        {/* bg-[#1e293b] = card background */}
        {/* rounded-xl = smooth rounded edges */}
        {/* shadow-xl = prominent card shadow */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Enter Your Player ID
        </h1>

        <input
          type="text"
          placeholder="Player ID"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
          className="w-full p-3 rounded-md bg-[#334155] border border-[#475569] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
          // bg-[#334155] = input background
          // border-[#475569] = input border
          // text-white = input text
          // placeholder-gray-400 = input placeholder
          // focus:ring-[#6366f1] = purple accent on focus
        />

        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-md bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold transition"
          // bg-[#6366f1] = purple button
          // hover:bg-[#4f46e5] = darker purple hover
          // text-white = button text
        >
          View Dashboard
        </button>
      </form>
    </div>
  );
}
