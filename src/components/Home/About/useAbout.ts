import { githubInfo } from '@/services'
import { useEffect, useState } from 'react'
import { Github } from './types'
import { useTranslation } from 'react-i18next'

const useAbout = () => {
  const [github, setGithub] = useState<null | Github>(null)
  const { t } = useTranslation('home')

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
    t,
    github,
  }
}

export default useAbout
