import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const[title, setTitle] = useState("");
  const[content, setContent] = useState("");

  const[isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const {name, value: newValue} = event.target;
    if(name === "title") {
        setTitle(newValue);
    } else if(name === "content") {
        setContent(newValue);
    }
  }

  function handleClick(event) {

    {props.add(title, content)};

     setTitle("");
     setContent("");


    event.preventDefault();
  }

  function handleTextClick() {

     setExpanded(true);

  }

  console.log(title + " ; " + content);

  return (
    <div>
      <form  className="create-note" onSubmit={handleClick}>
        {isExpanded ? <input name="title" placeholder="Title" value={title} onChange={handleChange}/> : null}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={content} onClick={handleTextClick} onChange={handleChange} />
        <Zoom in={isExpanded}><Fab type="submit"><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
