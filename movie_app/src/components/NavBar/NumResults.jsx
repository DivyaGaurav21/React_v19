import React from 'react'

const NumResults = ({ movies }) => {
    return (
        <p className="text-2xl font-serif font-extrabold text-green-800">
            Found <strong>{movies.length}</strong> results
        </p>
    )
}

export default NumResults