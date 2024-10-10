import React, { createContext, useState, useContext } from 'react';

export const toggler = {
    on: {
        toggle: true,
    },
    off: {
        toggle: false,
    },
};

export const ListContext = React.createContext(toggler.off);

export const ListContext2 = React.createContext(false);



///////////////////////////