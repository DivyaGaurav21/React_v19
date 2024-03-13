import React from 'react'
import WatchedMovie from './WatchedMovie'

const WatchedMovieList = ({ watched , onDeleteMovie}) => {
    return (
        <ul className="flex flex-col gap-1">
            {watched.map((movie) => (
              <WatchedMovie key={movie.imdbID} movie={movie} onDeleteMovie={onDeleteMovie}/>
            ))}
        </ul>
    )
}

export default WatchedMovieList