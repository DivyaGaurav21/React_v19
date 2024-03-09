import React from 'react'

const WatchedMovie = ({ movie }) => {
    return (
        <li className="flex flex-row justify-around items-center text-xl font-semibold text-yellow-400 bg-stone-400 p-3 rounded-md">
            <img className="w-[70px] h-[100px]" src={movie.Poster} alt={`${movie.Title} poster`} />
            <div className="flex flex-col gap-5">
                <h3>{movie.Title}</h3>
                <div className="flex flex-row justify-between">
                    <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                    </p>
                </div>
            </div>
        </li>
    )
}

export default WatchedMovie