import { sendMail } from '@/services'
import { MailData } from '@/services/types'
import { useInfo } from '@/sources'
import { FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const useContact = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const from = useRef<HTMLInputElement | null>(null)
  const subject = useRef<HTMLInputElement | null>(null)
  const text = useRef<HTMLTextAreaElement | null>(null)
  const { aboutMe } = useInfo()
  const { t } = useTranslation('home')

  const handleSendMail = async (data: MailData) => {
    try {
      await sendMail(data)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 1500)
      setLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
      setLoading(false)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (subject.current && from.current && text.current) {
      if (
        subject.current.value.length < 1 ||
        text.current.value.length < 1 ||
        from.current.value.length < 1
      ) {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000)
      } else {
        const data: MailData = {
          from: from.current.value,
          subject: subject.current.value,
          text: text.current.value,
        }
        setLoading(true)
        handleSendMail(data)
        from.current.value = ''
        text.current.value = ''
        subject.current.value = ''
      }
    }
  }

  return {
    handleSubmit,
    success,
    from,
    subject,
    text,
    error,
    loading,
    t,
    aboutMe,
  }
}

export default useContact
