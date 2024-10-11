import React, { useState, useEffect, useContext } from 'react';

// import {FavoriteButton} from "./favoriteButton";

import { ListContext, ToggleContext, MyListContext } from './listContext';
// import { ToggleProvider, ListContext2 } from './listContext';


import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

export function FavoritesList() {
    //keep track of the note being favorited
    // const [note, setNote] = useState("");

    //keeps list of all currrently favorited notes
    const [favorite, setFavorite] = useState([]);

    const test = true;

    //test
    const [data, setData] = useContext(MyListContext);

    //need to modify to only show note when favorited
    return (
        <div>
            <h4>List of Favorites:</h4>
            {dummyNotesList.map((note) => (
                    test ? <div key="noteID" >{note.title}</div> : ''
                ))}
        </div>
    );
}

//context to share button info toggle on/off
// function ToggleList() {
//     const [currentFavorite, setFavorite] = useState(toggler.off);

//     const toggleFav = () => {
//         setFavorite(currentFavorite === toggler.off ? toggler.on : toggler.off);
//     }

//     return (
//         <ListContext.Provider value = {currentFavorite}>
//             <FavoritesList/>
//         </ListContext.Provider>
//     )
// }

// export default ToggleList;









// export function FavoritesParent() {
//     const [favorites, setFavorites] = useState([]);

//     const toggleFavorite = (note) => {
//         setFavorites((previousFavorites) => {
//             if (previousFavorites.includes(note)){
//                 return previousFavorites.filter(fav => fav !== note);
//             } else {
//                 return [...previousFavorites, note];
//             }
//         })
//     };

//     return (
//         <div>
//             <FavoritesList favorites={favorites}/>
//             <FavoriteButton onToggle={toggleFavorite}/>
//         </div>
//     );
// }