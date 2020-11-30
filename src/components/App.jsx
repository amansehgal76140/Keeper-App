import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App()
{

  const [notes,setNote]=useState([]);
  const [islocal,setLocal]=useState("true");  
  function addNote(Note)
  {
    
    setNote((prevNote)=>{
      
      return [...prevNote,Note];
    });
    const curr=notes;
    curr.push(Note);
    localStorage.setItem("Notes",JSON.stringify(curr));
  }
  function deleteNote(id)
  {
    const curr=[];
    setNote(notes.filter((note,index)=>{
       if(id!==index)
       {
        curr.push(note); 
        return note;
       }
       return null;
    }));
    localStorage.setItem("Notes",JSON.stringify(curr));
  }
  function handleStorage()
  {
    const curr=JSON.parse(localStorage.getItem("Notes"));
    if(curr!==null)
    setNote(curr);
    setLocal(false);
  }
  if(islocal)
  handleStorage();
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