'use client';

import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import PlayerShieldCard from '@components/player/PlayerShieldCard';

export default function Sidebar() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <aside className="h-screen bg-[#0f0f11] p-4 flex flex-col items-center justify-between border-r border-zinc-800">
      {/* PLAYER CARD */}
      <PlayerShieldCard
        name="Cayley Knight"
        role="Player"
        position="Midfielder"
        imageUrl={image ?? "/placeholder.png"} // fallback if no image yet
      />

      {/* Upload button */}
      <label className="mt-4 cursor-pointer text-sm text-white border border-zinc-600 px-3 py-1 rounded hover:bg-zinc-800 transition-all">
        <Upload className="inline-block mr-2 w-4 h-4" />
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {/* Footer icon */}
      <div className="text-white opacity-40 text-sm mt-6">N</div>
    </aside>
  );
}
