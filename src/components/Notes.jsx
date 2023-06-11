import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
  return (
    <>
      <div className="mt-4">
        <h2 className="text-[1.8rem] underline underline-offset-4">
          Your Notes
        </h2>
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id}/>;
        })}
      </div>
    </>
  );
}

export default Notes