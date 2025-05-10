"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function PlayerLogin() {
    const [playerId, setPlayerId] = useState(""); 

    const router = useRouter(); 
// this navigates

    // This function is called when the user clicks "Login"
    const handleLogin = () => {
        if (playerId.trim()) {
            // If playerId is not empty, redirect to the player's dashboard
            router.push(`/player-dashboard/${playerId}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {/* Heading for the page */}
            <h1 className="text-2xl font-bold mb-4">Player Login</h1>

            {/* Text input for entering Player ID */}
            <input
                type="text"
                placeholder="Enter your Player ID"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)} 
                // Updates playerId state as the user types
                className="border rounded px-4 py-2 mb-4 w-64"
            />
            
            {/* Login button that triggers the handleLogin function */}
            <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
                Login
            </button>
        </div>
    );
}
