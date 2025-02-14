import { useState } from "react"
import { ThemeContext } from "../../context/context"


export default function ThemeProvider ({children}) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}