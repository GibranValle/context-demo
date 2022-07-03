import React, { createContext, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    console.log('toggling dark mode')
    setDarkMode(!darkMode)
  }
  const theme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });
  return (
    <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    </ThemeProvider>
  )
}