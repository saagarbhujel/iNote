import React,{useContext,useState,} from 'react'
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const [note, setNote] = useState({title:"", description : "", tag:"default"})
    const { addNote } = context;



    const addNotes =(e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
    }

    const onChange= (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <>
      <div className=" flex justify-center items-center flex-col mt-20">
        <h1 className="text-[2rem] underline underline-offset-4">Add a Note</h1>
        <form action="submit" className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="form-label block mb-2">
              Title:
            </label>
            <input
              className="w-full border border-gray-400 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              type="text"
              id="title"
              name="title"
              required
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full border border-gray-400 rounded py-2 px-4 h-32 resize-none focus:outline-none focus:border-blue-500"
              id="description"
              name="description"
              required
              onChange={onChange}
            />
          </div>
        </form>
        <div className="button">
          <button className="bg-purple-900 hover:bg-purple-600 text-white py-2 px-8 rounded" onClick={addNotes}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNote