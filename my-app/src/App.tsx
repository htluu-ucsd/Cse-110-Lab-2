import './App.css';

import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

import ToggleTheme, { ClickCounter } from "./hooksExercise";

import { ListContext, ToggleContext, MyListContext } from './listContext';
import { FavoriteButton } from "./favoriteButton"

import { createContext, useContext, useEffect, useState } from 'react';

import { BackgroundContextL, BackgroundContextD, themes } from './backgroundContext';

//For updating the theme
export function ToggleAppTheme() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  };

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightgrey' ? 'black' : 'lightgrey';
    };
  });

  return (
    <BackgroundContextL.Provider value={currentTheme}>
      <button onClick={toggleTheme}> Toggle Theme Page </button>
      <App />
    </BackgroundContextL.Provider>
  );
}


function App() {

  //FOR CREATE
  const [notes, setNotes] = useState(dummyNotesList);
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
    favorite: false,
  };
  const [createNote, setCreateNote] = useState(initialNote);

  const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", createNote.title);
    console.log("content: ", createNote.content);
    createNote.id = notes.length + 1;
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };

  //FOR UPDATE NOTES
  const [selectedNote, setSelectedNote] = useState<Note>(initialNote);

  //FOR DELETE
  const deleteNoteHandler = (note: Note) => {
    setNotes(prevNote => prevNote.filter(createNote => createNote !== note));
  };

  //updates the favorite
  const updateToggle = (id: number) => {
    setNotes((prevItems) =>
      prevItems.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      )
    );
  }

  //for backgrounds
  const theme = useContext(BackgroundContextL);

  return (
    <div className='app-container' style={{ background: theme.background, color: theme.color }}>
      <form className="note-form" onSubmit={createNoteHandler}>
        <div>
          <input
            placeholder="Note Title"
            onChange={(event) =>
              setCreateNote({ ...createNote, title: event.target.value })}
            required>
          </input>
        </div>

        <div>
          <textarea
            onChange={(event) =>
              setCreateNote({ ...createNote, content: event.target.value })}
            required>
          </textarea>
        </div>

        <div>
          <select
            onChange={(event) =>
              setCreateNote({ ...createNote, label: event.target.value as Label })}
            required>
            <option value={Label.personal}>Personal</option>
            <option value={Label.study}>Study</option>
            <option value={Label.work}>Work</option>
            <option value={Label.other}>Other</option>
          </select>
        </div>

        <div><button type="submit">Create Note</button></div>
      </form>

      <div className="notes-grid">
        {notes.map((note) => (
          <div style={{ background: theme.note }}
            key={note.id}
            className="note-item">
            <div className="notes-header">

              {/* HEART SHAPE BUTTON */}
              <ToggleContext>
                <FavoriteButton favoriteToggled={updateToggle} value={note.id} />
              </ToggleContext>

              <button style={{ color: theme.color }} onClick={() => {deleteNoteHandler(note)}}>x</button>

            </div>
            <h2 contentEditable="true" style={{ color: theme.color }}> {note.title} </h2>
            <p contentEditable="true" style={{ color: theme.color }}> {note.content} </p>
            <p contentEditable="true" style={{ color: theme.color }}> {note.label} </p>
          </div>
        ))}
      </div>
      
      {/* List of Notes */}
      <div>
        <h3>List of favorites:</h3>
        {notes.map((note) => (
          <p>{note.favorite ? note.title : ''}</p>
        ))}
      </div>
    </div>
  );
}


export default App;