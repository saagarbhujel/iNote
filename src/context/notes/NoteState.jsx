import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=>{
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
];
  
const [notes, setNotes] = useState(notesInitial)
    return(
        <>
        <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
        </NoteContext.Provider>
        
        </>
    )

}

export default NoteState;