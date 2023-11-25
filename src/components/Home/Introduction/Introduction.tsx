import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Introduction = () => {
  const { t } = useTranslation('common')
  const { t: tHome } = useTranslation('home')

  const handleDownloadCV = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/download-pdf`,
        {
          responseType: 'blob',
        },
      )
      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'jarji-abuashvili-cv.pdf')
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-center w-full h-screen bg-[url("/images/portfolio-back.jpg")] bg-cover bg-center'>
      <div className='text-center text-white'>
        <div className='flex justify-center'>
          <div className='w-44 h-44 border-2 border-secondary rounded-full bg-cover bg-center bg-[url("/images/profile.jpg")]'></div>
        </div>
        <div className='tinymid:block hidden'>
          <h1
            id='name'
            className='border-2 rounded-2xl p-1 bg-[#0000007a] border-white dark:border-primary-dark text-2xl italic capitalize font-bold'
          >
            {t('name')}
          </h1>
        </div>
        <div className='flex flex-col my-4'>
          <a
            href='#contacts'
            className='bg-primary dark:bg-primary-dark dark:hover:bg-primary-hover dark:active:bg-primary-active hover:bg-primary-hover active:bg-primary-active capitalize px-8 py-1 my-2 rounded text-lg'
          >
            {tHome('contact_me')}
          </a>
          <button
            onClick={handleDownloadCV}
            className='flex items-center justify-center bg-primary dark:bg-primary-dark dark:hover:bg-primary-hover dark:active:bg-primary-active hover:bg-primary-hover active:bg-primary-active capitalize px-8 py-1 my-2 rounded text-lg'
          >
            {tHome('download_cv')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
