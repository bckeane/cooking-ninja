import { useTheme } from "../hooks/useTheme"
import modeIcon from "../assets/mode-icon.svg"

//import the sytle sheet
import './ThemeSelector.css';

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const themeColors = ['#244a9c','#58249c', '#249c6b', '#b70233']

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)

    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img src={modeIcon} alt="what mode"
                onClick={toggleMode} 
                style={{filter: mode==='dark' ? 'invert(80%)' : 'invert(20%)' }}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div
                        key = {color}
                        onClick={() => changeColor(color)} 
                        style={{background: color}}/>

                        
                ))}
            </div>
            
        </div>
    )
}
