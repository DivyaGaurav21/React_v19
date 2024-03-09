import React, { useState } from 'react'

const Search = () => {
    const [query, setQuery] = useState("");
    return (
        <input
            className="h-9 w-[300px] px-4 rounded-lg border-2 border-red-600"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default Search