import './App.css';

import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

import ToggleTheme, { ClickCounter } from "./hooksExercise";
<<<<<<< HEAD

import { ListContext, ToggleContext, MyListContext } from './listContext';
=======
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
import { FavoriteButton } from "./favoriteButton"
import { FavoritesList } from './favoritesList';

import { createContext, useContext, useState } from 'react';
<<<<<<< HEAD


//context to share prop that determines button state
// const useToggle = () => {
//   const [isToggled, setIsToggled] = useState(false);

//   const toggle = () => {
//     setIsToggled(prev => !prev);
//   };

//   return { isToggled, toggle };
// };
=======
import { ListContext } from './listContext';


//context to share prop that determines button state
const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  const toggle = () => {
    setIsToggled(prev => !prev);
  };

  return { isToggled, toggle };
};
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
//context to share prop that determines button state

function App() {

<<<<<<< HEAD
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

  // setFavoriteList(
  //   [...favoriteList, false]
  // );

=======
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
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
<<<<<<< HEAD
              
              <ToggleContext>
                {/* {favoriteList[note.id] ? 'false' : 'true'} */}
                <FavoriteButton favoriteToggled={updateToggle} value={note.id - 1}/>
              </ToggleContext>

=======
              <FavoriteButton/>
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
              <button>x</button>

              {/* TESTING */}
              {/* <button onClick={() => updateToggle(note.id - 1, !favoriteList[note.id - 1])}>x test</button> */}
            </div>
            <h2> {note.title} </h2>
            <p> {note.content} </p>
            <p> {note.label} </p>
<<<<<<< HEAD
            <ToggleTheme />

            {/* testing purposes */}
            {/* <div>{data ? "a" : "b"}</div> */}
          </div>
        ))}
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
=======
            <ToggleTheme/>
          </div>
        ))}
      </div>
      <FavoritesList/>
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
      {/* <ListContext/> */}
    </div>
  );
}

export default App;