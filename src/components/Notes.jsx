import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNote} = context;
  return (
    <>
     <AddNote/>  

      <div className=" mt-4 mb-4 mx-5">
        <h2 className="text-[1.8rem] underline underline-offset-4 mx-5">
          Your Notes
        </h2>
        <div className="md:grid grid-cols-3 content-center lg:grid-cols-4 ">
          {notes.map((note) => {
            // console.log(note)
            return <NoteItem key={note._id}  note={note} />;
           
          })
        }
        </div>
      </div>
    </>
  );
}

export default Notes