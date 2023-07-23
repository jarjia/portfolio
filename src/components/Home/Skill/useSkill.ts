import { useEffect, useRef, useState } from 'react'

const useSkill = () => {
  const [isOpen, setIsOpen] = useState(false)
  const skillRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        skillRef.current &&
        !skillRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    isOpen,
    skillRef,
    setIsOpen,
  }
}

export default useSkill
