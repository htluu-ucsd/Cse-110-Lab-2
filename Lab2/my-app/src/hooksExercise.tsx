import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext, themes } from "./themeContext";

export function ClickCounter() {
    const [count, setCount] = useState(0);

<<<<<<< HEAD
    // const handleClick = () => {
    //     setCount(count + 1);
    // };

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

=======
    //testing
    // const [countsList, setCountsList] = useState<number[]>([]);

    const handleClick = () => {
        setCount(count + 1);

        //testing
        // setCountsList(prevList => [...prevList, count + 1]);
    };

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
    const theme = useContext(ThemeContext);
    return (
        <div
            style={{
                background: theme.background,
                color: theme.foreground,
                padding: "20px",
            }}
        >
            <p>You clicked {count} times </p>
            <button
                onClick={() => setCount(count + 1)}
                style={{ background: theme.foreground, color: theme.background }}
            >
                Click me
            </button>
        </div>
    );
}


// Wrapper component to provide context
function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={currentTheme}>
            <button onClick={toggleTheme}> Toggle Theme </button>
<<<<<<< HEAD
            <ClickCounter/>
=======
            <ClickCounter />
>>>>>>> ecf5cc2d67675fa514fe6ca8463a6eee3d0fef53
        </ThemeContext.Provider>
    );
}

export default ToggleTheme;