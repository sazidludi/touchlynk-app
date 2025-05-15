import React from 'react';
import { FilterOption } from '@/types/filters';


interface Props {
  selected: FilterOption;
  onChange: (value: FilterOption) => void;
}

const options: { label: string; value: FilterOption }[] = [
  { label: 'All Games', value: 'ALL' },
  { label: 'Last 5 Games', value: 'LAST_5' },
  { label: 'Last 10 Games', value: 'LAST_10' },
];

const PlayerFilters: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="flex gap-4 mb-4">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            selected === opt.value
              ? 'bg-purple-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default PlayerFilters;
