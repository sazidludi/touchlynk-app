'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@lib/utils';
import { Upload } from 'lucide-react';

// Utility function to stylize the shield card
const shieldCardStyles =
  'bg-gradient-to-b from-[#31192e] to-[#210f1e] shadow-lg rounded-b-[80px] rounded-t-[40px] border-[3px] border-yellow-500 p-4 text-center w-[280px] min-h-[400px] flex flex-col justify-between';

export default function Sidebar() {
  const [image, setImage] = useState<string | null>(null);

  // Handle user image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <aside className="h-screen bg-[#0f0f11] p-4 flex flex-col items-center justify-between border-r border-zinc-800">
      <div className={cn(shieldCardStyles)}>
        <div className="flex flex-col items-center">
          {/* Uploadable player image (no crop, no shape) */}
          {image ? (
            <Image
              src={image}
              alt="Player Photo"
              width={220}
              height={220}
              className="rounded-md object-cover"
            />
          ) : (
            <div className="w-[220px] h-[220px] bg-zinc-800 rounded-md flex items-center justify-center text-sm text-zinc-400">
              No Image
            </div>
          )}

          {/* Upload photo input */}
          <label className="mt-3 cursor-pointer text-sm text-white border border-zinc-600 px-3 py-1 rounded hover:bg-zinc-800 transition-all">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <h2 className="text-xl font-bold mt-4">Cayley Knight</h2>
          <p className="text-sm text-zinc-400">Trainer</p>
          <p className="text-sm text-zinc-500 mt-1">#4 — Midfielder</p>
        </div>
      </div>

      {/* Bottom icon */}
      <div className="text-white opacity-40 text-sm">N</div>
    </aside>
  );
}