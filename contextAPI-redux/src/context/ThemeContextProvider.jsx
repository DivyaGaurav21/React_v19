import React, { createContext, useContext ,  useState } from 'react'

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    // Toggle theme between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    if(!themeContext){
        throw new Error("context is not available");
    }
    return themeContext;
}