import React from 'react';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="bg-slate-800 p-6 mb-6 rounded-lg shadow-lg border border-gray-300 text-white">
      <h2 className="text-2xl font-extrabold text-red-500 mb-4">Movies You've Watched</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-center">
          <span className="text-red-500 text-3xl">#️⃣</span>
          <span className="ml-2 text-lg">{watched.length} movies</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 text-3xl">⭐️</span>
          <span className="ml-2 text-lg">{avgImdbRating.toFixed(1)}</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400 text-3xl">🌟</span>
          <span className="ml-2 text-lg">{avgUserRating.toFixed(1)}</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-600 text-3xl">⏳</span>
          <span className="ml-2 text-lg">{avgRuntime.toFixed(0)} min</span>
        </div>
      </div>
    </div>
  );
};

export default WatchedSummary;
