import axios from 'axios'

export const githubInfo = () => {
  return axios.get('https://api.github.com/users/jarjia')
}
