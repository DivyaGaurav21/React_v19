import React, { useState } from 'react'
import Movie from './Movie';

const MovieList = ({ movies , movieDetailsHandler }) => {
   

    return (
        <ul className="flex flex-col gap-2">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} movieDetailsHandler={movieDetailsHandler}/>
            ))}
        </ul>
    )
}

export default MovieList