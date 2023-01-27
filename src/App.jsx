import './App.css'
import { useEffect, useState } from 'react'
import Components from './components/Components'
import Loading from './Loading'
import axios from 'axios'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [github, setGithub] = useState({})

    useEffect(() => {
      setLoading(true)
      // setTimeout(() => {
        axios.get('https://api.github.com/users/jarjia').then(res => {
          setGithub(res.data) 
          setLoading(false)
        })
      // }, 1500)
    }, [])

  return (
    <div>
      {loading ? <Loading /> : <Components github={github}/>}
    </div>  
  )
}

export default App