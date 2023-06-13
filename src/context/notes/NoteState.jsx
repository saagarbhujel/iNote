import { useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import axios from "axios";

const NoteState = (props) => {
  const URL = "http://localhost:4000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  const [shouldRefresh, setShouldRefresh]=useState([])
  
  //FETCH ALL NOTES
  const fetchNotes = async()=>{
   try {
     const dbNotes = await axios.get(`${URL}/api/notes/notes `, {
       headers: {
         "Content-Type": "application/json",
         "auth-token":
           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3Mzc5MGRhYjliMWU3YTA2NjEyZTNlIn0sImlhdCI6MTY4NTI5MTQxN30.y7TLtV_p1ZnuRINaAtU0f1c6J60V8fnHPN5peBOxV_g",
       },
     });
     setNotes(dbNotes.data);
     console.log(dbNotes.data);
   } catch (error) {
    console.log(error)
   }
  }

 

  //ADD NOTES
  const addNote = async(title, description, tag)=>{
    try {
      const note = await axios.post(`${URL}/api/notes/notes`,{

      title,
      description,
      tag, 
     

    }, {
      
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3Mzc5MGRhYjliMWU3YTA2NjEyZTNlIn0sImlhdCI6MTY4NTI5MTQxN30.y7TLtV_p1ZnuRINaAtU0f1c6J60V8fnHPN5peBOxV_g",
      },
    });

    //CONCACT RETURNS AN ARRAY WHERE AS PUSH UPDATE AN ARRAY
     setNotes(notes.concat(note));
    // setNotes(notes.push(note))

    setShouldRefresh((v) => !v);
  }catch (error) {
    console.log(error)
  }
}
    

  //DELETE NOTES
  const deleteNote =async (id)=>{
    try {
        await axios.delete(`${URL}/api/notes/notes/${id} `, {
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3Mzc5MGRhYjliMWU3YTA2NjEyZTNlIn0sImlhdCI6MTY4NTI5MTQxN30.y7TLtV_p1ZnuRINaAtU0f1c6J60V8fnHPN5peBOxV_g",
          },
        });
        //TODO API CALL
        console.log("deleteing note with id " + id);
        const newNote = notes.filter((note) => {
          return note._id !== id;
        });
        setNotes(newNote);
        setShouldRefresh((v) => !v);
    } catch (error) {
      console.log(error)
    }
   
}


  //EDIT NOTES
  const editNote = ()=>{

  }


  return (
    <>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes, shouldRefresh }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
