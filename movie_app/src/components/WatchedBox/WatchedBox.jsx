import React, { useState } from 'react'
import WatchedSummary from './WatchedSummary';
import WatchedMovieList from './WatchedMovieList';

const WatchedBox = ({ tempWatchedData }) => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);


  return (
    <div className="p-4 w-[45%]">
      <button
        className="bg-red-950 text-white font-extrabold w-[50px] h-[50px] mb-1 rounded-full"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  )
}

export default WatchedBox