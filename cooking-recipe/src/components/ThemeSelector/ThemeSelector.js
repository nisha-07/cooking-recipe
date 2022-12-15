import "./ThemeSelector.css"

import useTheme from "../../hooks/useTheme";

const ThemeSelector = () => {
    const { changeColor } = useTheme()
    const themeColors = ['#58249c', '#249c6b', '#b70233'];

    return (
        <div className="theme-selector">
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
