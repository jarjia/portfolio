import axios from 'axios'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const cookies = document.cookie.split(';')
    const theme = cookies.find((item) => item.includes('theme'))?.split('=')[1]
    if (theme === 'true') {
      setState(true)
    } else {
      setState(false)
    }
  }, [])

  const request = async () => {
    try {
      let data = {
        name: 'jarji',
      }
      const res = await axios.post(
        'https://jarjia.github.io/portfolio/PHP/server.php',
        JSON.stringify(data),
      )
      console.log(res.data)
      alert(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSwitch = () => {
    const expirationDate = new Date()
    expirationDate.setFullYear(expirationDate.getFullYear() + 10)
    setState(!state)
    document.cookie = `theme=${!state}; expires=${expirationDate.toUTCString()}; path=/`
  }

  return (
    <div className='bg-green-700 mb-64'>
      <div
        className='w-[100px] h-[100px]'
        style={{
          background: state ? 'white' : 'black',
        }}
      ></div>
      <button onClick={handleSwitch}>switch</button>
      <br></br>
      <button onClick={request}>request</button>
    </div>
  )
}

export default Skills
