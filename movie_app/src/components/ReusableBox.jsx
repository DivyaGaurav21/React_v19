import React, { useState } from 'react'

const WatchedBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className="p-4 w-[45%]">
      <button
        className="bg-red-950 text-white font-extrabold w-[50px] h-[50px] mb-1 rounded-full"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  )
}

export default WatchedBox