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

  useEffect (() => {
    return () => {
      document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightgrey' ? 'black' : 'lightgrey';
    };
  });

  return (
      <BackgroundContextL.Provider value={currentTheme}>
          <button onClick={toggleTheme}> Toggle Theme Page </button>
          <App/>
      </BackgroundContextL.Provider>
  );
}

function App() {

  // const [data, setData] = useContext(MyListContext);

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

      <form className="note-form">
        <div><input placeholder="Note Title"></input></div>

        <div><textarea></textarea></div>

        <div><button type="submit">Create Note</button></div>
      </form>
      <div className="notes-grid">
        {dummyNotesList.map((note) => (
          <div style={{ background: theme.note}}
            key={note.id}
            className="note-item">
            <div className="notes-header">
              {/* HEART SHAPE BUTTON */}
              
              <ToggleContext>
                {/* {favoriteList[note.id] ? 'false' : 'true'} */}
                <FavoriteButton favoriteToggled={updateToggle} value={note.id - 1}/>
              </ToggleContext>

              <button style={{ color: theme.color }}>x</button>

              {/* TESTING */}
              {/* <button onClick={() => updateToggle(note.id - 1, !favoriteList[note.id - 1])}>x test</button> */}
            </div>
            <h2 style={{ color: theme.color }}> {note.title} </h2>
            <p style={{ color: theme.color }}> {note.content} </p>
            <p style={{ color: theme.color }}> {note.label} </p>
            {/* <ToggleTheme /> */}

            {/* testing purposes */}
            {/* <div>{data ? "a" : "b"}</div> */}
          </div>
        ))}
        {/* <ClickCounter /> */}
      </div>
      {/* <ToggleTheme/> */}
      {/* <ToggleContext>
        <FavoritesList />
      </ToggleContext> */}

      {/* TESTTING */}
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