import React from 'react'

const Movie = ({ movie }) => {
    return (
        <li className="flex flex-row justify-around items-center text-xl font-semibold text-yellow-400 bg-stone-400 p-3 rounded-md">
            <img className="w-[70px] h-[100px]" src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p className="flex flex-col">
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    )
}

export default Movie