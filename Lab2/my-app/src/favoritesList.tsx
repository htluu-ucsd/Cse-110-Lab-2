import React, { useState, useEffect, useContext } from 'react';

// import {FavoriteButton} from "./favoriteButton";

import { ListContext, ToggleContext, MyListContext } from './listContext';
// import { ToggleProvider, ListContext2 } from './listContext';


import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

export function FavoritesList() {
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