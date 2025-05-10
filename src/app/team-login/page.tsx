"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function TeamLogin() {
  const [teamId, setTeamId] = useState(""); 
  const router = useRouter(); 

  const handleLogin = () => {
    if (teamId.trim()) {
      router.push(`/dashboard/team?id=${teamId}`); // Redirect with team ID
    } else {
      alert("Please enter a team ID."); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Team Dashboard Login</h1>

      {/* Input field for team ID */}
      <input
        type="text"
        placeholder="Enter Team ID"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)} // Update state on input
        className="border border-gray-300 rounded px-3 py-2 mb-4 w-64"
      />

 
      <button
        onClick={handleLogin}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
      >
        Login as Coach
      </button>
    </div>
  );
}
