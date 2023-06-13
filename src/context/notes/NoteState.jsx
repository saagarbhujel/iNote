import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64844146b37f51041d31b587",
      user: "6473790dab9b1e7a06612e3e",
      title: "First note",
      description: "this is my first notes",
      tag: "personal",
      date: "2023-06-10T09:24:22.659Z",
      __v: 0,
    },
    {
      _id: "64845517dfcb383d47753b56",
      user: "6473790dab9b1e7a06612e3e",
      title: "Second note",
      description: "this is my first notes",
      tag: "personal",
      date: "2023-06-10T10:48:55.414Z",
      __v: 0,
    },
    {
      _id: "6485c0b33942f37c0dde903a",
      user: "6473790dab9b1e7a06612e3e",
      title: "Second note",
      description: "this is my first notes",
      tag: "personal",
      date: "2023-06-11T12:40:19.400Z",
      __v: 0,
    },
    {
      _id: "6485c0b43942f37c0dde903c",
      user: "6473790dab9b1e7a06612e3e",
      title: "Second note",
      description: "this is my first notes",
      tag: "personal",
      date: "2023-06-11T12:40:20.097Z",
      __v: 0,
    },
    {
      _id: "6485f2d73942f37c0dde9047",
      user: "6473790dab9b1e7a06612e3e",
      title: "third note",
      description: "this is my third notes",
      tag: "personal",
      date: "2023-06-11T16:14:15.910Z",
      __v: 0,
    },
    {
      _id: "6485f2d83942f37c0dde9049",
      user: "6473790dab9b1e7a06612e3e",
      title: "third note",
      description: "this is my third notes",
      tag: "personal",
      date: "2023-06-11T16:14:16.872Z",
      __v: 0,
    },
    {
      _id: "6485f2d93942f37c0dde904b",
      user: "6473790dab9b1e7a06612e3e",
      title: "third note",
      description: "this is my third notes",
      tag: "personal",
      date: "2023-06-11T16:14:17.558Z",
      __v: 0,
    },
    {
      _id: "6485f2da3942f37c0dde904d",
      user: "6473790dab9b1e7a06612e3e",
      title: "third note",
      description: "this is my third notes",
      tag: "personal",
      date: "2023-06-11T16:14:18.272Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

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
