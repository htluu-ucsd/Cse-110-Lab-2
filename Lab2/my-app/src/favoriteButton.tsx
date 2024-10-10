import React, { useState, useEffect, useContext } from 'react';

import { ListContext, ListContext2, toggler } from './listContext';

import { FavoritesList } from './favoritesList';

// import heartIcon from './free-heart-icon-3510-thumb.png';
// import { ReactComponent as heartIcon2 } from 'src/heart-3510.svg';

export function FavoriteButton () {
    const [favorites, setFavorites] = useState(false);

    const [notes, setNotes] = useState([]);
    // const currentTheme = useContext(HeartContext);
    // const [theme, setTheme] = useState(themes.red);
    const [heart, setHeart] = useState('♡');

    const [toggleOn, setToggle] = useState(false);

    const handleClick = () => {
        setFavorites(!favorites);
        // setTheme(theme === themes.black? themes.red : themes.black);
        setHeart(heart === '♡' ? '♥️' : '♡')
        setToggle(!toggleOn);
    };

    useEffect(() => {
        // FavoritesList();
        document.title = `You favorited ${toggleOn}`;
    }, [toggleOn]);

    const tog = useContext(ListContext);

    

    return (
        <div>
            {/* THE BUTTON */}
            <button
                onClick={handleClick}
                style={{color: toggleOn ? 'red' : 'black'}}
            >
                {heart} 
                {/* <img src={heartIcon} alt="Heart Icon" width={'15'} height={'15'}/> */}
                {/* <div>♡♥️</div> */}
            </button>
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
//             <FavoriteButton/>
//         </ListContext.Provider>
//     )
// }

// export default ToggleList;