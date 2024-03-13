import React from 'react'

const Search = ( {query, setQuery}) => {
    return (
        <input
            className="h-9 w-[300px] px-4 rounded-lg border-2 border-yellow-600"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default Search