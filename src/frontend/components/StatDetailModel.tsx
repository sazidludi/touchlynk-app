'use client';

import React from 'react';

interface StatDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function StatDetailModal({ isOpen, onClose, title, children }: StatDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#161826] rounded-xl w-full max-w-3xl max-h-[80vh] p-6 overflow-y-auto shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white text-lg">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
