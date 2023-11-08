import { Layout } from './components'
import { loadImage } from './helpers'
import { useEffect } from 'react'
import { Home } from './pages'
import sun from '/images/sun.png'
import ghLogo from '/images/gh-logo.png'
import hosted from '/images/hosted.png'
import moon from '/images/moon.png'
import nightBg from '/images/night-bg.avif'
import sunBg from '/images/sun-bg.avif'

function App() {
  useEffect(() => {
    loadImage([sun, ghLogo, hosted, moon, nightBg, sunBg])
  }, [])

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
