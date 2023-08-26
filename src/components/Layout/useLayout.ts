import { AppContext } from '@/context'
import { useContext, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const useLayout = () => {
  const { theme, handleModes } = useContext(AppContext)
  const [isBurger, setIsBurger] = useState(false)
  const [shouldDropDown, setShouldDropDown] = useState(false)
  const burgerRef = useRef<null | HTMLDivElement>(null)
  const langRef = useRef<null | HTMLDivElement>(null)
  const [t, i18n] = useTranslation('common')

  useEffect(() => {
    const locale = localStorage.getItem('locale')
    const handleOutBurger = (event: MouseEvent) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsBurger(false)
      }
    }

    const handleOutLangSwitch = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setTimeout(() => {
          setShouldDropDown(false)
        }, 100)
      }
    }

    if (locale === null || locale === 'en') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('ka')
    }

    document.addEventListener('mousedown', handleOutBurger)
    document.addEventListener('mousedown', handleOutLangSwitch)
    return () => {
      document.removeEventListener('mousedown', handleOutBurger)
      document.removeEventListener('mousedown', handleOutLangSwitch)
    }
  }, [])

  return {
    isBurger,
    setIsBurger,
    theme,
    handleModes,
    burgerRef,
    langRef,
    setShouldDropDown,
    shouldDropDown,
    i18n,
    t,
  }
}

export default useLayout
