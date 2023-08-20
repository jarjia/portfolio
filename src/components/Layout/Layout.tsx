import { AppContext } from '@/context'
import { Layout as LayoutType } from './types'
import { useContext } from 'react'

const Layout: React.FC<LayoutType> = ({ children }) => {
  const { theme, handleModes } = useContext(AppContext)

  if (theme === null) {
    return null
  }

  return (
    <section className={theme}>
      <nav className='fixed grid grid-cols-3 tinymid:grid-cols-2 items-center z-[10] px-8 shadow-lg text-white bg-primary dark:bg-primary-dark text-whit h-20 w-screen'>
        <div className='tinymid:hidden block'>
          <h1 id='name' className='text-2xl italic capitalize font-bold'>
            jarji abuashvili
          </h1>
        </div>
        <ul className='capitalize flex items-center justify-center gap-2'>
          <li>
            <a href='#skills' className='capitalize'>
              skills
            </a>
          </li>
          <li>
            <a href='#experiences' className='capitalize'>
              experiences
            </a>
          </li>
          <li>
            <a href='#projects' className='capitalize'>
              projects
            </a>
          </li>
          <li>
            <a href='#contacts' className='capitalize'>
              contacts
            </a>
          </li>
        </ul>
        <ul className='flex justify-end'>
          <li
            onClick={() => handleModes(theme === 'light' ? 'dark' : 'light')}
            className='flex dark:bg-switcher bg-white w-[40px] p-[3px] h-[22px] rounded-full cursor-pointer'
          >
            <div className='relative w-full h-full'>
              <div className='absolute right-1/2 dark:right-0 transition-all w-3/6 h-full bg-primary dark:bg-primary-dark rounded-full'></div>
            </div>
          </li>
        </ul>
      </nav>
      <main className='text-black dark:text-white bg-[url("/images/gray-background.jpg")] dark:bg-[url("/images/darkmode.png")]'>
        {children}
      </main>
      <footer></footer>
    </section>
  )
}

export default Layout
