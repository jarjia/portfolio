import { AppContext } from '@/context'
import { useContext, useState, useRef, useEffect } from 'react'

const useLayout = () => {
  const { theme, handleModes } = useContext(AppContext)
  const [isBurger, setIsBurger] = useState(false)
  const ref = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsBurger(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    isBurger,
    setIsBurger,
    theme,
    handleModes,
    ref,
  }
}

export default useLayout
