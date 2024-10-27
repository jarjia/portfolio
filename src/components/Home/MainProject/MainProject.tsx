import { Slide } from '@/components'
import useMainProject from './useMainProject'

const MainProject = () => {
  const {
    height,
    slides,
    hovered,
    setHovered,
    t,
    parentHeight,
    ref,
    slide,
    setSlide,
  } = useMainProject()

  return (
    <div
      id='projects'
      className='flex flex-col items-center pt-12 px-64 midNorm:px-4'
    >
      <h2 className='text-4xl capitalize border-b-2 border-black dark:border-white pb-2 w-fit px-6'>
        {t('main_project_label')}
      </h2>
      <p className='text-2xl capitalize pt-2'>epic movie quotes</p>
      <div className='flex flex-col border-normal border-black rounded dark:border-white px-10 py-2 items-center mt-2 mb-8'>
        <a
          href='https://github.com/jarjia/epic-movie-quotes-next'
          className='capitalize mb-2 underline italic'
          target='_blank'
        >
          {t('github_link')} ({t('front')})
        </a>
        <a
          href='https://github.com/jarjia/epic-movie-quotes-laravel'
          className='capitalize mb-2 underline italic'
          target='_blank'
        >
          {t('github_link')} ({t('back')})
        </a>
        <a
          href='https://movie-quotes.jarji-abuashvili.com'
          className='capitalize underline italic'
          target='_blank'
        >
          {t('production_link')}
        </a>
      </div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative w-full'
        onDrag={() => console.log('jarji')}
      >
        <div
          ref={ref}
          className='overflow-hidden rounded-lg'
          style={{
            height: `${parentHeight}px`,
          }}
        >
          {slides.map((item, index) => {
            return (
              <div
                key={item.img}
                className='transition-all duration-500'
                style={{
                  transform: `translateX(${index - slide}00%)`,
                }}
              >
                <Slide
                  height={height}
                  img={item.img}
                  hovered={item.hovered}
                  text={item.text}
                />
              </div>
            )
          })}
          <div
            className={`${
              hovered
                ? 'opacity-1 pointer-events-auto tinyd:opacity-1 tinyd:pointer-events-auto'
                : 'opacity-1 pointer-events-auto tinydmin:opacity-0 tinydmin:pointer-events-none'
            } transition-all absolute bottom-[-30px] py-2.5 w-full flex justify-center gap-2`}
          >
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                slide === 0 ? 'bg-primary' : 'bg-gray-500 dark:bg-white'
              }`}
              onClick={() => setSlide(0)}
            ></button>
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                slide === 1 ? 'bg-primary' : 'bg-gray-500 dark:bg-white'
              }`}
              onClick={() => setSlide(1)}
            ></button>
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                slide === 2 ? 'bg-primary' : 'bg-gray-500 dark:bg-white'
              }`}
              onClick={() => setSlide(2)}
            ></button>
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                slide === 3 ? 'bg-primary' : 'bg-gray-500 dark:bg-white'
              }`}
              onClick={() => setSlide(3)}
            ></button>
          </div>
        </div>
        <button
          type='button'
          className={`${
            hovered
              ? 'opacity-1 pointer-events-auto tinyd:opacity-1 tinyd:pointer-events-auto'
              : 'opacity-1 pointer-events-auto tinydmin:opacity-0 tinydmin:pointer-events-none'
          } transition-all absolute top-0 left-0 z-2 flex items-center justify-center h-full px-4 cursor-pointer group`}
          onClick={() => {
            setSlide(slide - 1)
          }}
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 '>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className={`${
            hovered
              ? 'opacity-1 pointer-events-auto tinyd:opacity-1 tinyd:pointer-events-auto'
              : 'opacity-1 pointer-events-auto tinydmin:opacity-0 tinydmin:pointer-events-none'
          } transition-all absolute top-0 right-0 z-2 flex items-center justify-center h-full px-4 cursor-pointer group`}
          onClick={() => {
            setSlide(slide + 1)
          }}
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default MainProject
