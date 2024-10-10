import React, { useState, useEffect, useContext } from 'react';

<<<<<<< HEAD
// import { ListContext, ToggleContext, MyListContext } from './listContext';

// import { FavoritesList } from './favoritesList';

interface FavoriteButtonProp {
    favoriteToggled: (i: number, value: boolean) => void;
    value: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProp> = ({ favoriteToggled, value }) => {
    const [favorites, setFavorites] = useState(false);

=======
import { ListContext, ListContext2, toggler } from './listContext';

import { FavoritesList } from './favoritesList';

// import heartIcon from './free-heart-icon-3510-thumb.png';
// import { ReactComponent as heartIcon2 } from 'src/heart-3510.svg';

export function FavoriteButton () {
    const [favorites, setFavorites] = useState(false);

    const [notes, setNotes] = useState([]);
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
    // const currentTheme = useContext(HeartContext);
    // const [theme, setTheme] = useState(themes.red);
    const [heart, setHeart] = useState('♡');

<<<<<<< HEAD
    const [toggleOn, setToggle] = useState(true);


    //test
    // const [data, setData] = useContext(MyListContext);
=======
    const [toggleOn, setToggle] = useState(false);
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53

    const handleClick = () => {
        setFavorites(!favorites);
        // setTheme(theme === themes.black? themes.red : themes.black);
<<<<<<< HEAD
        setHeart(heart === '♥️' ? '♡' : '♥️')
        // setData(prev => !prev);
        favoriteToggled(value, toggleOn);
        setToggle(!toggleOn);
    };

=======
        setHeart(heart === '♡' ? '♥️' : '♡')
        setToggle(!toggleOn);
    };

    useEffect(() => {
        // FavoritesList();
        document.title = `You favorited ${toggleOn}`;
    }, [toggleOn]);

    const tog = useContext(ListContext);

    

>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
    return (
        <div>
            {/* THE BUTTON */}
            <button
                onClick={handleClick}
<<<<<<< HEAD
                style={{color: toggleOn ? 'black' : 'red'}}
            >
                {heart}
                {/* {data ? 'favorited' : 'not'} */}
=======
                style={{color: toggleOn ? 'red' : 'black'}}
            >
                {heart} 
                {/* <img src={heartIcon} alt="Heart Icon" width={'15'} height={'15'}/> */}
                {/* <div>♡♥️</div> */}
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
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