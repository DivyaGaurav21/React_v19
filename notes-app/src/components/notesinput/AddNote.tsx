import React, { useState } from "react";
import { noteProps, noteTypes } from "../notes/note-type";

type addNoteProps = {
    addNote: (note: noteTypes) => noteTypes[]
}

const AddNote = ({ addNote }: addNoteProps) => {

    const [inputVal, setInputVal] = useState("");

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    }

    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-md w-[50%]">
            <form className="flex justify-between">
                <label htmlFor="add_todo" className="block text-sky-600 font-semibold mb-2">
                    Add Todo
                </label>
                <input
                    type="text"
                    id="add_todo"
                    className="w-[70%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your todo"
                    onChange={(inputHandler)}
                    value={inputVal}
                />
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"

                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddNote;
