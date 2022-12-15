import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined)
        throw new Error("useTheme() must be used inside the ThemeProvider")
    return context
}

export default useTheme
