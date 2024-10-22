import React, { useState, useEffect, useContext } from 'react';

interface FavoriteButtonProp {
    favoriteToggled: (i: number) => void;
    value: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProp> = ({ favoriteToggled, value }) => {
    const [heart, setHeart] = useState('🤍');

    const [toggleOn, setToggle] = useState(true);

    const handleClick = () => {
        // setTheme(theme === themes.black? themes.red : themes.black);
        setHeart(heart === '❤️' ? '🤍' : '❤️')
        favoriteToggled(value);
        setToggle(!toggleOn);
    };

    return (
        <div>
            {/* THE BUTTON */}
            <button
                onClick={handleClick}>
                {heart}
            </button>
        </div>
    );
}