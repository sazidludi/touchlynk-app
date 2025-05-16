import React from 'react';

export function getMatchStats() {
  const matches = [
    { date: 'May 4', opponent: 'Chelsea', result: 'W 3-1', goals: 1, assists: 0, rating: 8.2 },
    { date: 'Apr 27', opponent: 'Man City', result: 'L 1-2', goals: 0, assists: 1, rating: 7.1 },
    { date: 'Apr 20', opponent: 'Everton', result: 'W 2-0', goals: 2, assists: 0, rating: 9.0 },
    { date: 'Apr 13', opponent: 'Spurs', result: 'D 1-1', goals: 0, assists: 0, rating: 6.8 },
  ];

  return (
    <div className="space-y-3">
      {matches.map((match, i) => (
        <div key={i} className="bg-[#1c1f2e] p-4 rounded-lg flex justify-between text-sm text-white">
          <div>{match.date}</div>
          <div>{match.opponent}</div>
          <div>{match.result}</div>
          <div>G: {match.goals}</div>
          <div>A: {match.assists}</div>
          <div>⭐ {match.rating}</div>
        </div>
      ))}
    </div>
  );
}

export function getGoalStats() {
  return (
    <ul className="text-white list-disc pl-5 space-y-1">
      <li>Chelsea – 1 goal</li>
      <li>Everton – 2 goals</li>
      <li>Arsenal – 1 goal</li>
      <li>Leicester – 2 goals</li>
    </ul>
  );
}
