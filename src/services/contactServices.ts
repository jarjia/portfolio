import axios from 'axios'
import { MailData } from './types'

export const sendMail = (data: MailData) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/api/send`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
