import React, { useEffect, useState } from 'react';

export const themes = {
    dark: {
        background: '#000000',
        color: '#eeeeee',
        note: '#333333',
    },

    light: {
        background: '#d3d3d3',
        color: '#000000',
        note: '#f9f9f9',
    },
};

// const initialState = {
//     dark: false,
//     theme: themes.light,
//     toggle: () => {}
// }

export const BackgroundContextL = React.createContext(themes.light);
export const BackgroundContextD = React.createContext(themes.dark);