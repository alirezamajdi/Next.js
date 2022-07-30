import { createContext, useContext, useState, ReactNode } from 'react'

interface IContext {
  theme: string
  toggleTheme: () => void
}
const Context = createContext<IContext | null>(null)

export function useThemeContext() {
  return useContext(Context)
}
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light')

  const toggleTheme = () => {
    setTheme((old) => {
      if (old === 'light') return 'dark'
      else return 'light'
    })
  }

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  )
}
export default ThemeProvider
