import React, { useContext , useEffect, useRef, useState} from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, fetchNotes,shouldRefresh } = context;

     useEffect(() => {
       fetchNotes();
     }, [shouldRefresh]);


     // FOR UPDATING NOTE
     const updateNote = (note)=>{

     }

     //FOR MODAL
     const [modalOpen, setModalOpen] = useState(false)
     const ref = useRef(null)
     const openModal =()=>{
      setModalOpen(true)
     }

     const modalClose = ()=>{
      setModalOpen(false)
     }

  return (
    <>
      <AddNote />

      {/* MODAL */}
      <button onClick={openModal}
        id="openModalButton"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>

      <div
        ref={ref}
        className={`fixed inset-0 flex items-center justify-center z-50 ${modalOpen ? "" : "hidden"} `}
      >
        {/* <!-- Modal background --> */}
        <div className="fixed inset-0 bg-gray-800 opacity-75"></div>

        {/* <!-- Modal content --> */}
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg z-10">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Edit Note</h2>
            <button onClick={modalClose} className="text-gray-500 hover:text-gray-700">
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 5.354 4.646a.5.5 0 0 0-.707.707L9.293 10l-4.647 4.646a.5.5 0 0 0 .708.707L10 10.707l4.646 4.647a.498.498 0 0 0 .707 0 .5.5 0 0 0 0-.707L10.707 10l4.647-4.646a.5.5 0 0 0 0-.707z" />
              </svg>
            </button>
          </div>

          {/* <!-- Modal body --> */}
          <div className="mb-4">
            <label for="input1" className="block text-gray-700  mb-2">
              Title:
            </label>
            <input
              id="input1"
              type="text"
              className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label for="input2" className="block text-gray-700  mb-2">
              Tag:
            </label>
            <input
              id="input2"
              type="text"
              className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label for="textarea" className="block text-gray-700  mb-2">
              Description:
            </label>
            <textarea
              id="textarea"
              className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 px-3 py-2 resize-none"
            ></textarea>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
              Save
            </button>
            <button onClick={modalClose} className="px-4 py-2 ml-2 bg-gray-300 hover:bg-gray-400 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-4 mb-4 mx-5">
        <h2 className="text-[1.8rem] underline underline-offset-4 mx-5">
          Your Notes
        </h2>
        <div className="md:grid grid-cols-3 content-center lg:grid-cols-4 ">
          {notes.map((note) => {
            // console.log(note)
            return (
              <NoteItem key={note._id} note={note} updateNote={updateNote} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Notes