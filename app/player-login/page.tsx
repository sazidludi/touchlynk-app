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
    <div className="flex items-center justify-center h-screen px-4 text-white bg-gradient-to-b from-[#0a0609] to-[#1e0d1c]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161826] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-700"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Enter Your Player ID
        </h1>

        <input
          type="text"
          placeholder="Player ID"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
          className="w-full p-3 rounded-md bg-[#1e1f2e] border border-[#475569] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white font-semibold transition"
        >
          View Dashboard →
        </button>
      </form>
    </div>
  );
}
