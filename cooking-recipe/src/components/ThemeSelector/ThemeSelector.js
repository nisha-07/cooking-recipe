import "./ThemeSelector.css"

import modeIcon from "../../assets/mode-icon.svg"
import useTheme from "../../hooks/useTheme";

const ThemeSelector = () => {
    const { changeColor, changeMode, mode } = useTheme()
    const themeColors = ['#58249c', '#249c6b', '#b70233'];

    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
    }

    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img src={modeIcon}
                    onClick={toggleMode}
                    alt="mode"
                    style={{ filter: mode === "dark" ? "invert(90%)" : "invert(0%)" }} />
            </div>
            <div className="theme-buttons">
                {themeColors && themeColors.map((color, index) => (
                    <div key={index} onClick={() => changeColor(color)} style={{ background: color }}>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ThemeSelector
