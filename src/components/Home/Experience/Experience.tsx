import { useInfo } from '@/sources'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation('home')
  const { experiences } = useInfo()

  return (
    <div id='experiences' className='py-2 px-48 pb-8 md:px-8 tinymid:px-2'>
      <h2 className='text-3xl text-center mb-8 text-black dark:text-white capitalize'>
        {t('experience_label')}
      </h2>
      <div className='flex flex-col gap-3'>
        {experiences.map((item) => {
          return (
            <div
              key={item.website}
              className='grid grid-cols-[25%_75%] sm:grid-cols-1 w-full bg-white shadow-xl'
            >
              <div className='bg-[#343a40] flex flex-col text-white items-center justify-center p-8 py-10'>
                <h3 className='text-2xl capitalize'>{item.type}</h3>
                <p className='text-sm capitalize'>{item.duration}</p>
              </div>
              <div className='text-black flex justify-center flex-col px-2 py-4'>
                <div className='flex tinymid:flex-col justify-between items-center pb-4'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={item.logo}
                      alt="Company's logo"
                      className='rounded-full'
                      width={25}
                      height={25}
                    />
                    <p className='text-xl capitalize'>{item.place}</p>
                  </div>
                  <small className='capitalize'>
                    {t('location_label')}: {item.location}
                  </small>
                </div>
                <p>{item.desc}</p>
                <a
                  href={item.website}
                  target='_blank'
                  className='capitlize pt-2 w-fit underline italic'
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

export default Experience
