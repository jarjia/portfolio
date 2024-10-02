import { useTranslation } from 'react-i18next'

const Introduction = () => {
  const { t } = useTranslation('common')
  const { t: tHome } = useTranslation('home')

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
          <a
            href={`${window.location.origin}/portfolio/files/Jarji-Abuashvili-CV.pdf`}
            className='flex items-center justify-center bg-primary dark:bg-primary-dark dark:hover:bg-primary-hover dark:active:bg-primary-active hover:bg-primary-hover active:bg-primary-active capitalize px-8 py-1 my-2 rounded text-lg'
          >
            {tHome('view_cv')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction
