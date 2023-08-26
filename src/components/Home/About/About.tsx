import { useInfo } from '@/sources'
import useAbout from './useAbout'

const About = () => {
  const { github, t } = useAbout()
  const { aboutMe } = useInfo()

  return (
    <section className='grid grid-cols-3 md:grid-cols-1 px-6 py-6 gap-8'>
      <div className='text-center leading-normal'>
        <h2 className='capitalize text-3xl py-2'>{t('about_me')}</h2>
        <h4 className='text-lg py-2'>{t('introduction_name')}</h4>
        <p className='mt-4 leading-7 mid:leading-6 mid:mt-3'>
          {t('introduction_p_1')}
        </p>
        <p className='mt-6 leading-7 mid:leading-6 mid:mt-3'>
          {t('introduction_p_2')}
        </p>
      </div>
      <div>
        <div>
          <a
            href={github?.html_url}
            className='flex justify-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={github?.avatar_url}
              alt='my avatar'
              title='My avatar'
              className='w-[70%] h-[70%] rounded-full'
            />
          </a>
        </div>
        <div className='text-center pt-1'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h3>
              <strong>{github?.login}</strong>
            </h3>
            <h5>{github?.bio}</h5>
            <a
              href={github?.html_url}
              target='_blank'
              className='bg-gradient-to-b from-[#eee] hover:from-[rgb(216, 216, 216)] to-[#ddd] hover:to-[rgb(187, 187, 187)] flex font-sans items-center px-2 py-1 rounded-[5px] w-fit justify-center'
              rel='noopener noreferrer'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'
                alt='github icon'
                className='w-5 h-5 mr-1'
              />
              <strong className='text-black'>
                {' '}
                Follow {`@${github?.login}`}
              </strong>
            </a>
          </div>
          <small>
            Followers: {github?.followers} | Repositories:{' '}
            {github?.public_repos}
          </small>
        </div>
      </div>
      <div>
        <h1 className='capitalize text-3xl text-center py-2'>
          {t('basic_information')}
        </h1>
        <div className='flex justify-between my-3 mt-8 px-1'>
          <strong className='text-lg'>{t('full_name_label')}: </strong>
          <span className='capitalize'>{aboutMe.fullName}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>{t('email_label')}: </strong>
          <span>{aboutMe.email}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>{t('age_label')}: </strong>
          <span>{aboutMe.age}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>{t('phone_label')}: </strong>
          <span>{aboutMe.phone}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>{t('location_label')}: </strong>
          <span>{aboutMe.residentOf}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>{t('languages_label')}: </strong>
          <span>
            {aboutMe.languages.map((item) => {
              return (
                <span key={item} className='capitalize'>
                  {aboutMe.languages.indexOf(item) ===
                  aboutMe.languages.length - 1
                    ? `${item}`
                    : `${item}, `}
                </span>
              )
            })}
          </span>
        </div>
      </div>
    </section>
  )
}

export default About
