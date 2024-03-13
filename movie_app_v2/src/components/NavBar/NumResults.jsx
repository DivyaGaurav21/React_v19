import React from 'react'

const NumResults = ({ movies }) => {
    return (
        <p className="text-2xl font-serif font-extrabold text-yellow-600">
            Found <strong>{movies.length}</strong> results
        </p>
    )
}

export default NumResults