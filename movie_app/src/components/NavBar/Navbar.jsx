import React, { useState } from 'react'
import Logo from './Logo';
import Search from './Search';
import NumResults from './NumResults';

const Navbar = ({ movies }) => {
    return (
        <nav className="bg-yellow-400 flex flex-row justify-between items-center p-5">
            <Logo />
            <Search />
            <NumResults movies={movies} />
        </nav>
    )
}

export default Navbar