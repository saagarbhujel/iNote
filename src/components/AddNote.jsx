import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import AlertContext from "../context/alerts/AlertContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const contextAlert = useContext(AlertContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });


  const { addNote } = context;
  const { showAlert } = contextAlert;

  const addNotes = (e) => {
    if (localStorage.getItem("token")) {
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({ title: "", description: "", tag: "" });
    } else {
      showAlert("Please login to add a note", "Error");
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className=" flex justify-center items-center flex-col mt-20">
        <h1 className="text-[2rem] underline underline-offset-4">Add a Note</h1>
        <form
          action="submit"
          className="max-w-md mx-auto flex justify-center items-center flex-col"
        >
          <div className=" my-4 ">
            <label htmlFor="title" className="form-label block mb-2">
              Title:
            </label>
            <input
              className="w-[18rem] sm:w-[20rem] md:w-[32rem] lg:w-[40rem] md:h-10 lg:h-12 border border-gray-400 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
              type="text"
              id="title"
              name="title"
              value={note.title}
              required
              onChange={onChange}
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-[18rem] sm:w-[20rem] md:w-[32rem] lg:w-[40rem] rounded py-2 px-4 h-32 md:h-52 lg:h-72 resize-none    border border-gray-400  focus:outline-none focus:border-blue-500"
              id="description"
              name="description"
              value={note.description}
              placeholder="At least 8 character."
              required
            />
          </div>
        </form>
        <div className="button">
          <button
            className="bg-purple-900 hover:bg-purple-600 text-white py-2 px-8 rounded"
            onClick={addNotes}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
