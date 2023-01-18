import './App.css'
import { useEffect, useState } from 'react'
import Components from './components/Components'
import Loading from './Loading'
import { useQuery } from "@apollo/client";
import { FILMS_QUERY } from './graphql/graphql';

const App = () => {
    const [startLoading, setStartLoading] = useState(false)
    const [github, setGithub] = useState()
    const { data, loading, error } = useQuery(FILMS_QUERY);
    console.log(data&&data);

    // useEffect(() => {
    //   axios.get('https://api.github.com/users/jarjia').then(res => console.log(res))
    // }, [])

    useEffect(() => {
      setStartLoading(true)
        setTimeout(() => {
          setStartLoading(false);
          }, 1500);
    }, [])

  return (
    <div>
        <Components />
        {/* <Loading /> */}
    </div>  
  )
}

export default App