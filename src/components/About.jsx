import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext)
  useEffect(()=>{
    a.update()
  },[])
  return (
    <>
    <div>This is {a.state.name} and he is {a.state.age}</div>

    </>
  )
}

export default About