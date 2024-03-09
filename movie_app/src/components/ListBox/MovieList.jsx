import React, { useState } from 'react'
import Movie from './Movie';

const MovieList = ({ movies }) => {
   

    return (
        <ul className="flex flex-col gap-2">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} />
            ))}
        </ul>
    )
}

export default MovieList