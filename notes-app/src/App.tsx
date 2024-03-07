// import { useState } from "react"
// import Notes from "./components/notes/Notes"
// import AddNote from "./components/notesinput/AddNote"
// import { notes } from "./data"
// import { noteTypes } from "./components/notes/note-type"

// const App = () => {
//   const [allNote, setAllNote] = useState(notes);

//   const addNoteHandler = (note: noteTypes) => {
//     return [note, ...allNote]
//   }

//   return (
//     <div className="text-center my-4  w-full flex flex-col justify-center items-center ">
//       <AddNote addNote={addNoteHandler} />
//       {
//         allNote.map(note => <Notes key={note.id} priority={note.priority} text={note.text} />)
//       }
//     </div>
//   )
// }

// export default App


import React from 'react'
// import Carousel from './components/Carousel';
import Steps from './components/steps/Steps'

const App = () => {
  return (
    <div>
      <Steps/>
      {/* <Carousel/> */}
    </div>
  )
}

export default App