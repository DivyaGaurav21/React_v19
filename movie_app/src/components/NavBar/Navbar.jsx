import React from 'react'

const Navbar = ({ children }) => {
    return (
        <nav className="bg-yellow-400 flex flex-row justify-between items-center p-5">
           {children} 
        </nav>
    )
}

export default Navbar