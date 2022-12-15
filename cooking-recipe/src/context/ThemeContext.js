import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    // custom logic

    return (
        <ThemeContext.Provider value={{ color: "#58249c" }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
