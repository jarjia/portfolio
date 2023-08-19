import { createContext, useState, useEffect } from 'react'
import { Context } from './types'

export const AppContext = createContext<Context>({
  theme: null,
  handleModes: () => {},
})

const AppContextProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const [theme, setTheme] = useState<null | string>(null)

  useEffect(() => {
    const cookies = document.cookie.split(';')
    const newTheme = cookies
      .find((item) => item.includes('theme'))
      ?.split('=')[1]
    if (newTheme) {
      setTheme(newTheme)
    }
    if (newTheme === undefined) {
      setTheme('light')
    }
  }, [theme])

  const handleModes = (argTheme: string) => {
    document.cookie = `theme=${argTheme}; path=/; max-age=31536000`
    setTheme(argTheme)
  }

  const contextValue = {
    theme,
    handleModes,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
