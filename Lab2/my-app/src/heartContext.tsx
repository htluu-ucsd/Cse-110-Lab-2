import React from 'react';

export const themes = {
    black: {
        background: 'transparent',
        color: 'ffffff',
    },

    red: {
        background: '#fe251b',
        color: 'ff0000',
    },
};

export const HeartContext = React.createContext(themes.black);