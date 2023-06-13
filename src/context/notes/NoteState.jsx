import { useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import axios from "axios";

const NoteState = (props) => {
  const URL = "http://localhost:4000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  //FETCH ALL NOTES
  const fetchNotes = async()=>{
    const dbNotes = await axios.get(`${URL}/api/notes/notes `, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3Mzc5MGRhYjliMWU3YTA2NjEyZTNlIn0sImlhdCI6MTY4NTI5MTQxN30.y7TLtV_p1ZnuRINaAtU0f1c6J60V8fnHPN5peBOxV_g",
      },
    });
    setNotes(dbNotes.data)
    console.log(dbNotes.data)
  }

  useEffect(()=>{
    fetchNotes()
  },[])

  //ADD NOTES
  const addNote = (title, description, tag)=>{
//TODO API CALL

console.log("Adding notes")


    const note = {
      _id: "6485f2da3942f37c0dde95404d",
      user: "6473790dab9b1e7a06346612e3e",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-11T16:14:18.272Z",
      __v: 0,
    };

    //CONCACT RETURNS AN ARRAY WHERE AS PUSH UPDATE AN ARRAY
     setNotes(notes.concat(note));
    // setNotes(notes.push(note))
  }

  //DELETE NOTES
  const deleteNote = (id)=>{
    //TODO API CALL
    console.log("deleteing note with id " + id)
    const newNote = notes.filter((note)=>{return note._id!== id})
    setNotes(newNote)
}


  //EDIT NOTES
  const editNote = ()=>{

  }


  return (
    <>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
