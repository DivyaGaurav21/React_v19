import React from 'react'
import WatchedMovie from './WatchedMovie'

const WatchedMovieList = ({ watched }) => {
    return (
        <ul className="flex flex-col gap-2">
            {watched.map((movie) => (
              <WatchedMovie key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    )
}

export default WatchedMovieList