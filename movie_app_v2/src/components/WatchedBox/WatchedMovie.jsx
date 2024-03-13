import React from 'react';

const WatchedMovie = ({ movie, onDeleteMovie }) => {
    return (
        <li className="flex items-center justify-between text-xl font-semibold text-gray-800 bg-gray-100 p-4 rounded-md shadow-md mb-1">
            <img className="w-24 h-28 mr-4" src={movie.Poster} alt={`${movie.Title} poster`} />
            <button onClick={() => onDeleteMovie(movie.imdbID)}>❎</button>
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{movie.Title}</h3>
                <div className="flex items-center">
                    <p className="flex items-center mr-6">
                        <span className="text-yellow-400 text-2xl mr-1">⭐️</span>
                        <span className="text-lg">{movie.imdbRating}</span>
                    </p>
                    <p className="flex items-center mr-6">
                        <span className="text-yellow-500 text-2xl mr-1">🌟</span>
                        <span className="text-lg">{movie.userRating}</span>
                    </p>
                    <p className="flex items-center">
                        <span className="text-yellow-600 text-2xl mr-1">⏳</span>
                        <span className="text-lg">{movie.runtime} min</span>
                    </p>
                </div>
            </div>
        </li>
    );
};

export default WatchedMovie;
