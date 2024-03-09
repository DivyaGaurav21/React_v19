import React, { useState } from 'react'
import ListBox from './ListBox/ListBox';
import WatchedBox from './WatchedBox/WatchedBox';

const Main = ({ movies }) => {

    return (
        <main className="flex flex-row justify-around">
            <ListBox movies={movies} />
            {/* <WatchedBox tempWatchedData={tempWatchedData} /> */}
        </main>
    )
}

export default Main