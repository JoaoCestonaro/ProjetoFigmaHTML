import { LuMoonStar, LuSun } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext.jsx'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <LuMoonStar size={20} /> : <LuSun size={20} />}
    </button>
  )
}

export default ThemeToggle

