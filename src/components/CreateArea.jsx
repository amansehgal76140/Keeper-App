import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props)
{
    const [Note,setNote]=useState({title:"",content:""});
    const [isExpanded,setExpanded]=useState(false);
    function handleChange(event)
    {
        
        const {name,value}=event.target;
        setNote((prevNote)=>{
            
         return {
             ...prevNote,
             [name]:value
         };
        });
    }
     function handleSubmit(event)
     {
         event.preventDefault();
     }
     function expand()
     {
         setExpanded(true);
     }   
    return (
        <div>
          <form className="create-note" onSubmit={handleSubmit}>
            { isExpanded && (<input name="title" placeholder="Title" onChange={handleChange} value={Note.title}/>) }
            <textarea name="content" onClick={expand} placeholder="Take a note..." rows={isExpanded?3:1} onChange={handleChange} value={Note.content} />
            <Zoom in={isExpanded}>
            <Fab onClick={()=>{
             props.add(Note);
             setNote(()=>{
                return { title:"",
                content:""
             };
        
            })                 
            }}><AddIcon /></Fab>
            </Zoom>
          </form>
        </div>
    );
}

export default CreateArea;