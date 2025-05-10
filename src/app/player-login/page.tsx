"use client";

// player login page with input and button

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PlayerLogin() {
    const [playerId, setPlayerId] = useState("");
    //keeps track of players through ID - useState
    const router = useRouter();

    const handleLogin = () => {
        if (playerId.trim()) {
            router.push(`/player-dashboard/${playerId}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {/* HEADING */}
            <h1 className="text-2xl font-bold mb-4">Player Login</h1>

            <input
                type="text"
                placeholder="Enter your Player ID"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)} // Update state when input changes
                className="border rounded px-4 py-2 mb-4 w-64"
                  />
                  
                <button
                    onClick={handleLogin}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                      </div>
    );
}