import { useInfo } from '@/sources'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation('home')
  const { education } = useInfo()

  return (
    <div className='py-2 px-48 pb-8 md:px-8 tinymid:px-2'>
      <h2 className='text-3xl text-center mb-8 text-black dark:text-white capitalize'>
        {t('education_label')}
      </h2>
      <div className='flex flex-col gap-3'>
        {education.map((item) => {
          return (
            <div
              key={item.website}
              className='grid grid-cols-[25%_75%] sm:grid-cols-1 w-full bg-white shadow-xl'
            >
              <div className='bg-[#343a40] text-center text-white p-8 py-10'>
                <h3 className='text-2xl'>{item.type}</h3>
                <p className='text-sm'>{item.date}</p>
              </div>
              <div className='text-black flex justify-center flex-col px-2 gap-2'>
                <p className='text-xl'>
                  {item.name} | {item.edu_type}
                </p>
                <small className='capitalize'>
                  {t('location_label')}: {item.location}
                </small>
                <a
                  href={item.website}
                  target='_blank'
                  className='capitlize underline w-fit italic'
                >
                  {t('visit_web')}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education
