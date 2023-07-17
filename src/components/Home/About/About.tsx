import { aboutMe } from '@/sources'
import useAbout from './useAbout'

const About = () => {
  const { github } = useAbout()

  return (
    <section className='grid grid-cols-3 sm:grid-cols-1 px-6 py-6 gap-8'>
      <div className='text-center leading-normal'>
        <h2 className='capitalize text-3xl py-2'>about me</h2>
        <h4 className='text-lg py-2'>
          Hello, I am Jarji Abuashvili a web developer
        </h4>
        <p className='mt-4 leading-7 mid:leading-6 mid:mt-3'>
          I have been developing web apps for year and half, I am motivated and
          always looking out for new oppurtunities.I have experience of
          developing web apps mainly using React.js and JavaScript.{' '}
        </p>
        <p className='mt-6 leading-7 mid:leading-6 mid:mt-3'>
          My objective is to find company where I can improve my skills and
          experience as a junior web developer or as an intership candidate. I
          have created various React.js projects and in conclusion while doing
          this projects I find myself very determined and consistent.
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
              <strong> Follow {`@${github?.login}`}</strong>
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
          basic information
        </h1>
        <div className='flex justify-between my-3 mt-8 px-1'>
          <strong className='text-lg'>Fullname: </strong>
          <span className='capitalize'>{aboutMe.fullName}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>Email: </strong>
          <span>{aboutMe.email}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>Age: </strong>
          <span>{aboutMe.age}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>Phone: </strong>
          <span>{aboutMe.phone}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>Location: </strong>
          <span>{aboutMe.residentOf}</span>
        </div>
        <div className='flex justify-between my-3 px-1'>
          <strong className='text-lg'>Languages: </strong>
          <span>
            {aboutMe.languages.map((item) => {
              return (
                <span key={item}>
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
