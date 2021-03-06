//import logo from './logo.svg';
//import './App.css';
import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "30/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "25/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "20/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my forth note!",
      date: "19/04/2021",
    },
  ]);

  const addNote = (text) => {
    console.log(text);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
