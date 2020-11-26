import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App()
{

  const [notes,setNote]=useState([]);
  
  function addNote(Note)
  {
    setNote((prevNote)=>{
    return [...prevNote,Note];
    });
  }
  function deleteNote(id)
  {
    setNote(notes.filter((note,index)=>{
       if(id!==index)
       return note;
       return null;
    }));
  }
  return (<div>
  <Header />
  <CreateArea add={addNote}/>
  
  {notes.map((note,index)=>{
   return <Note key={index} title={note.title} content={note.content} id={index} Delete={deleteNote} />;
  })}
  
  <Footer />
  </div>);
}
export default App;