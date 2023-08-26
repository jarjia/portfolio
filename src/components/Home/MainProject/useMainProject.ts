import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const useMainProject = () => {
  const [slide, setSlide] = useState(0)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<null | HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [parentHeight, setParentHeight] = useState(0)
  const { t } = useTranslation('home')

  const handleHeight = () => {
    if (ref.current) {
      setHeight(ref.current?.clientHeight)
      setParentHeight(
        window.innerWidth < 658 ? 400 : ref.current.clientWidth / 2 + 50,
      )
    }
  }

  useEffect(() => {
    handleHeight()
    window.addEventListener('resize', handleHeight)
    return () => {
      window.removeEventListener('resize', handleHeight)
    }
  })

  useEffect(() => {
    if (slide < 0) {
      setSlide(3)
    } else if (slide > 3) {
      setSlide(0)
    }
  }, [slide])

  return {
    parentHeight,
    height,
    ref,
    hovered,
    setHovered,
    slide,
    t,
    setSlide,
  }
}

export default useMainProject