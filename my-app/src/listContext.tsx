import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

export const toggler = {
    on: {
        toggle: true,
    },
    off: {
        toggle: false,
    },
};

export const ListContext = React.createContext(toggler.off);


/////////////////////////////////
type MyListContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const MyListContext = createContext<MyListContextType>([false, () => {}]);

interface ToggleContextProps {
    children: ReactNode;
}

export function ToggleContext({ children }: ToggleContextProps) {
    const [fav, setFav] = useState<boolean>(false);
    return (
        <MyListContext.Provider value={[fav, setFav]}>
            { children }
        </MyListContext.Provider>
    );
}
