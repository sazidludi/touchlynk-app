// src/components/StatCircle.tsx

import React from 'react';

interface Props {
  value: number; // e.g. 8
  label: string; // e.g. "Goal Contributions"
  subtext?: string; // e.g. "6 G + 2 A"
}

const StatCircle: React.FC<Props> = ({ value, label, subtext }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="w-32 h-32 rounded-full border-4 border-purple-500 flex items-center justify-center text-3xl font-bold">
        {value}
      </div>
      <p className="mt-2 text-sm text-gray-300">{label}</p>
      {subtext && <p className="text-xs text-gray-400">{subtext}</p>}
    </div>
  );
};

export default StatCircle;