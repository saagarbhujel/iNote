import React,{useContext} from 'react'
import noteContext from "../context/notes/NoteContext"

const Home = () => {

  const context = useContext(noteContext)
  const{notes, setNotes} = context
  return (
    <div className="container flex justify-center items-center flex-col mt-6">
      <h1 className="text-[2rem] underline underline-offset-4">Add a Note</h1>
      <form action="submit" className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="form-label block mb-2">
            Title:
          </label>
          <input
            className="w-full border border-gray-400 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full border border-gray-400 rounded py-2 px-4 h-32 resize-none focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            required
          />
        </div>
      </form>
      <div className="button">
        <button className="bg-purple-900 hover:bg-purple-600 text-white py-2 px-8 rounded">
          Add
        </button>
      </div>
      <div className='mt-4'>
        <h2 className="text-[1.8rem] underline underline-offset-4">Your Notes</h2>
        {notes.map((note)=>{
          return note.title
        })}
      </div>
    </div>
  );
}

export default Home