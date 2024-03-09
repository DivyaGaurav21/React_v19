import React, { useState } from 'react'
import MovieList from './MovieList';

const ListBox = ({ movies }) => {
    const [isOpen1, setIsOpen1] = useState(true);

    return (
        <div className="p-4 w-[45%]">
            <button
                className="bg-red-950 text-white font-extrabold w-[50px] h-[50px] mb-1 rounded-full"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && (
                <MovieList movies={movies} />
            )}
        </div>
    )
}

export default ListBox