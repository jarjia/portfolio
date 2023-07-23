import { createContext, useState, useEffect } from 'react'
import { Context } from './types'

export const AppContext = createContext<Context>({
  theme: false,
  handleModes: () => {},
})

const AppContextProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const [theme, setTheme] = useState<boolean | null>(null)

  useEffect(() => {
    const cookies = document.cookie.split(';')
    const newTheme = cookies
      .find((item) => item.includes('theme'))
      ?.split('=')[1]
    if (newTheme) {
      setTheme(newTheme === 'false' ? false : true)
    }
  }, [theme])

  const handleModes = () => {
    document.cookie = `theme=${!theme}; path=/; max-age=31536000`
    const cookies = document.cookie.split(';')
    const newTheme = cookies
      .find((item) => item.includes('theme'))
      ?.split('=')[1]
    if (newTheme) {
      setTheme(newTheme === 'false' ? false : true)
    }
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
