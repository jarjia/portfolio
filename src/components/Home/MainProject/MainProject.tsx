import { useState, useEffect } from 'react'
import { Slide } from '@/components'

const MainProject = () => {
  const [slide, setSlide] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (slide < 0) {
      setSlide(3)
    } else if (slide > 3) {
      setSlide(0)
    }
  }, [slide])

  return (
    <div className='flex flex-col items-center sm:px-2 pt-12 px-64'>
      <h2 className='text-4xl border-b-2 border-black dark:border-white mb-8 pb-2 w-fit px-6'>
        Main project
      </h2>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative w-full'
      >
        <div className='relative h-[450px] overflow-hidden rounded-lg'>
          <div
            className='block transition-all duration-500'
            style={{
              transform: `translateX(${slide > 0 ? `-${slide}00%` : '0%'})`,
            }}
          >
            <Slide
              img='images/main.png'
              hovered={hovered}
              text="This is my main project, which for me was the hardest project i've ever
        had to do on my own. In this project I had to use Next.js for frontend
        part and Laravel for backend part. This is landing page for my app from
        where you can login or create account and verify your email which will
        be sent to that specified email or quickly register or login with google
        account and access further content of my app. If for some reason you
        forgot your password, you can recover it just by providing your
        account's email and recover instructions will be sent to that email. 
        Also this app has support for English and Georgian"
            />
          </div>
          <div
            className='block transition-all duration-500'
            style={{
              transform: `translateX(${
                slide > 1 ? '-100%' : slide === 1 ? '0%' : '100%'
              })`,
            }}
          >
            <Slide
              img='images/feed.png'
              hovered={hovered}
              text="After logging in you will be introduced to a page called news feed. In
        news feed you have access to newest posted posts which are movie quotes
        but they have a face of posts on which you can interact by either liking
        it or commenting on it and your interaction will be sent to post's
        author via notifications which you can see from navbar on the right. you
        can create a post by clicking button on the top, but you can create
        post(quote) only under your own movies. Also you have ability to search
        through posts by what movie they belong to by starting search with @ or
        by quote names which starts with # or just search both by not providing
        anything before search."
            />
          </div>
          <div
            className='block transition-all duration-500'
            style={{
              transform: `translateX(${
                slide === 2
                  ? '0%'
                  : slide === 0
                  ? '200%'
                  : slide === 3
                  ? '-100%'
                  : '100%'
              })`,
            }}
          >
            <Slide
              img='images/profile.png'
              hovered={hovered}
              text=' On the profile page you have access to your accounts information. From
        here you can change your name, email, password or your avatar, but if
        you are registered with google you are only able to change your name and
        avatar. If you are registered without google you can change anything
        even email. Changing email is a bit different than changing other
        information because new email has to be verified so when you provide new
        email first you get verification mail on that new email, after you
        verify you get redirected to profile page and new email is set!'
            />
          </div>
          <div
            className='block transition-all duration-500'
            style={{
              transform: `translateX(${
                slide === 3 ? '0%' : slide === 0 ? '300%' : '100%'
              })`,
            }}
          >
            <Slide
              img='images/desc.png'
              hovered={hovered}
              text="On movie description page we get more info about the movie we have
        created, From here we can update movie credentials or delete the movie.
        Also we have access to all the quotes this movie has which we can also
        delete or update as we wish and of course we can add new quote from here
        straight away without going to news feed page and we don't even need to
        choose for which movie the quote will be created for because we are
        already on specific movie page and it is attached to that movie by default."
            />
          </div>
        </div>
        <div className='absolute z-2 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
          <button
            type='button'
            className={`w-3 h-3 rounded-full ${
              slide === 0 ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setSlide(0)}
          ></button>
          <button
            type='button'
            className={`w-3 h-3 rounded-full ${
              slide === 1 ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setSlide(1)}
          ></button>
          <button
            type='button'
            className={`w-3 h-3 rounded-full ${
              slide === 2 ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setSlide(2)}
          ></button>
          <button
            type='button'
            className={`w-3 h-3 rounded-full ${
              slide === 3 ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setSlide(3)}
          ></button>
        </div>
        <button
          type='button'
          className='absolute top-0 left-0 z-2 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          onClick={() => {
            setSlide(slide - 1)
          }}
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 right-0 z-2 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          onClick={() => {
            setSlide(slide + 1)
          }}
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
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
