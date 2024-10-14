import './App.css';

import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

import ToggleTheme, { ClickCounter } from "./hooksExercise";

import { ListContext, ToggleContext, MyListContext } from './listContext';
import { FavoriteButton } from "./favoriteButton"
import { FavoritesList } from './favoritesList';

import { createContext, useContext, useEffect, useState } from 'react';

// import { ThemeContext, themes } from "./themeContext";
import { BackgroundContextL, BackgroundContextD, themes } from './backgroundContext';



//context to share prop that determines button state
// const useToggle = () => {
//   const [isToggled, setIsToggled] = useState(false);

//   const toggle = () => {
//     setIsToggled(prev => !prev);
//   };

//   return { isToggled, toggle };
// };
//context to share prop that determines button state

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

  const [notes, setNotes] = useState(dummyNotesList);
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
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

  //holds favorites
  const [favoriteList, setFavoriteList] = useState([false, false, false, false, false, false]);

  //updates the elements
  const updateToggle = (i: number, value: boolean) => {
    setFavoriteList(prev => {
      const newFavoriteList = [...prev];
      newFavoriteList[i] = value;
      return newFavoriteList;
    })
  }

  //for backgrounds
  const theme = useContext(BackgroundContextL);

  return (
    <div className='app-container' style={{ background: theme.background, color: theme.color }}>
      {/* <ToggleTheme/> */}
      {/* <button onClick={document.body}>CHANGE THEME</button> */}

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
                {/* {favoriteList[note.id] ? 'false' : 'true'} */}
                <FavoriteButton favoriteToggled={updateToggle} value={note.id - 1} />
              </ToggleContext>

              <button style={{ color: theme.color }}>x</button>

              {/* TESTING */}
              {/* <button onClick={() => updateToggle(note.id - 1, !favoriteList[note.id - 1])}>x test</button> */}
            </div>
            <h2 style={{ color: theme.color }}> {note.title} </h2>
            <p style={{ color: theme.color }}> {note.content} </p>
            <p style={{ color: theme.color }}> {note.label} </p>
          </div>
        ))}
      </div>
      
      <div>
        <h3>List of favorites:</h3>
        {favoriteList.map((boolean, i) => (
          <p>{boolean ? dummyNotesList[i].title : ''}</p>
        ))}
      </div>
      {/* <ListContext/> */}
    </div>
  );
}


export default App;