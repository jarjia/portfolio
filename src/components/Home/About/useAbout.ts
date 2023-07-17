import { githubInfo } from '@/services'
import { useEffect, useState } from 'react'
import { Github } from './types'

const useAbout = () => {
  const [github, setGithub] = useState<null | Github>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await githubInfo()
        const { public_repos, followers, html_url, login, avatar_url, bio } =
          res.data

        const filteredData = {
          public_repos,
          followers,
          html_url,
          login,
          avatar_url,
          bio,
        }
        setGithub(filteredData)
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
  }, [])

  return {
    github,
  }
}

export default useAbout
