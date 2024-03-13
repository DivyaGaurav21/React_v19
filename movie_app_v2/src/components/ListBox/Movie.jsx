import React from 'react';

const Movie = ({ movie, movieDetailsHandler }) => {
  return (
    <li className="flex flex-row justify-between items-center bg-gray-100 p-4 rounded-md shadow-md">
      <img className="w-24 h-28 mr-4" src={movie.Poster} alt={`${movie.Title} poster`} />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{movie.Title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          <span role="img" aria-label="Calendar">🗓</span> {movie.Year}
        </p>
      </div>
      <button 
        onClick={() => movieDetailsHandler(movie.imdbID)} 
        className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-900 transition duration-300 ease-in-out"
      >
        Show Details
      </button>
    </li>
  );
};

export default Movie;
