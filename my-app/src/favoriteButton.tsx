import React, { useState, useEffect, useContext } from 'react';

// import { ListContext, ToggleContext, MyListContext } from './listContext';

// import { FavoritesList } from './favoritesList';

interface FavoriteButtonProp {
    favoriteToggled: (i: number, value: boolean) => void;
    value: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProp> = ({ favoriteToggled, value }) => {
    const [favorites, setFavorites] = useState(false);

    // const currentTheme = useContext(HeartContext);
    // const [theme, setTheme] = useState(themes.red);
    const [heart, setHeart] = useState('♡');

    const [toggleOn, setToggle] = useState(true);


    //test
    // const [data, setData] = useContext(MyListContext);

    const handleClick = () => {
        setFavorites(!favorites);
        // setTheme(theme === themes.black? themes.red : themes.black);
        setHeart(heart === '♥️' ? '♡' : '♥️')
        // setData(prev => !prev);
        favoriteToggled(value, toggleOn);
        setToggle(!toggleOn);
    };

    return (
        <div>
            {/* THE BUTTON */}
            <button
                onClick={handleClick}
                style={{color: toggleOn ? 'black' : 'red'}}
            >
                {heart}
                {/* {data ? 'favorited' : 'not'} */}
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