import React from 'react'

const Main = ({ children }) => {

    return (
        <main className="flex flex-row justify-around">
            {children}
        </main>
    )
}

export default Main