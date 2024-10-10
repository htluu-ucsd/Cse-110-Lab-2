import './App.css';

import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

import ToggleTheme, { ClickCounter } from "./hooksExercise";
import { FavoriteButton } from "./favoriteButton"
import { FavoritesList } from './favoritesList';

import { createContext, useContext, useState } from 'react';
import { ListContext } from './listContext';


//context to share prop that determines button state
const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  const toggle = () => {
    setIsToggled(prev => !prev);
  };

  return { isToggled, toggle };
};
//context to share prop that determines button state

function App() {

  return (

    <div className='app-container'>
      <form className="note-form">
        <div><input placeholder="Note Title"></input></div>

        <div><textarea></textarea></div>

        <div><button type="submit">Create Note</button></div>
      </form>
      <div className="notes-grid">
        {dummyNotesList.map((note) => (
          <div
            key={note.id}
            className="note-item">
            <div className="notes-header">
              {/* HEART SHAPE BUTTON */}
              <FavoriteButton/>
              <button>x</button>
            </div>
            <h2> {note.title} </h2>
            <p> {note.content} </p>
            <p> {note.label} </p>
            <ToggleTheme/>
          </div>
        ))}
      </div>
      <FavoritesList/>
      {/* <ListContext/> */}
    </div>
  );
}

export default App;