import { useContext, useState } from "react";
import NoteContext from "./NoteContext";
import axios from "axios";
import AlertContext from "../alerts/AlertContext"

const NoteState = (props) => {

  //ALERT state
  const context = useContext(AlertContext)
  const {showAlert} = context;


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
           localStorage.getItem("token"),
       },
     });
     setNotes(dbNotes.data);
    //  console.log(dbNotes.data);
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
        "auth-token": localStorage.getItem("token"),
      },
    });

    //CONCACT RETURNS AN ARRAY WHERE AS PUSH UPDATE AN ARRAY
    // use spread operator here
    // let _notes = [...notes]
    //  setNotes([...notes, _notes]);
    //the below line is best approach using spread operator
    setNotes([...notes, note])
    // setNotes(notes.push(note))

    //Alert Message for adding messages
    setShouldRefresh((v) => !v);
    showAlert("Note added successfully" ,"Success")
  }catch (error) {
    console.log(error)
    showAlert("Note added failed","Error")
  }
}
    

  //DELETE NOTES
  const deleteNote =async (id)=>{
    try {
        await axios.delete(`${URL}/api/notes/notes/${id} `, {
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              localStorage.getItem("token"),
          },
        });
        //TODO API CALL
        // console.log("deleteing note with id " + id);
        const newNote = notes.filter((note) => {
          return note._id !== id;
        });
        setNotes(newNote);
        setShouldRefresh((v) => !v);
        showAlert("Note deleted successfully","Success")
    } catch (error) {
      console.log(error)
      showAlert("Note deleted failed","Error")
    }
   
}


  //EDIT NOTES
  const editNote = async (id,title, description, tag)=>{
    try {
     const response = await axios.put(`${URL}/api/notes/updatenotes/${id}`,{
        title,
         description,
         tag
      },{
         headers: {
            "Content-Type": "application/json",
            "auth-token":
              lo,
          },
      });
      // console.log('updated note',response.data)
      setShouldRefresh((v) => !v);
      showAlert("Note updated successfully","Success")
    } catch (error) {
      console.log(error)
      showAlert("Note update failed","Error")
    }
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id===id) {
        element.title=title,
        element.description= description,
        element.tag=tag
      }
      
    }
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
