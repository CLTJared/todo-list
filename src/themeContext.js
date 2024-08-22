/* 
    useContext file
    ---------------
    We can create multiple functions/etc that need to be available throughout all of our 'app'
    that we can then access at any point through the children of the app.

    This is helpful if there are functions or other things we need to have available in different
    areas of our app.   
*/

import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext(); // Creating context to track our theme, exporting to use in rest of application.
const ThemeUpdateContext = React.createContext();

export function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true); // Context is being set here

    toggleTheme = () => setDarkTheme(prevDarkTheme = !prevDarkTheme); // toggle dark theme between true/false

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}