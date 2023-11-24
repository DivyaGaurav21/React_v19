import { noteProps } from "./note-type"


const Notes = ({ text, priority }: noteProps) => {
    return (
        <div className={`border p-8 text-xl rounded-xl h-[6rem] bg-orange-300 w-[50%] text-slate-100 mt-4 ${priority}`}>{text}</div>
    )
}

export default Notes
