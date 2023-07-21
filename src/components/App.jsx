import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import CreateArea from "./CreateArea";


// function createNote(note) {
//     return <Note key={note.key} title={note.title} content={note.content}/>
// }

function App() {

    const[noteArray,  setNoteArray] = useState([]);

    function handleAdd(title, content) {

        setNoteArray((prevValue) => {
            return [...prevValue, {titleKey: title, contentKey: content}]
        });
    }

    function handleDelete(id) {

        setNoteArray(noteArray.filter((element, index) => {
            return index !== id
        }))
    }

    return (
        <div>
          <Header />
          <CreateArea add={handleAdd} />
          {noteArray.map((element, index) => { return <Note key={index} id={index} title={element.titleKey} content={element.contentKey} delete={handleDelete}/> })}
          <Footer />
        </div>
      );
}

export default App;
