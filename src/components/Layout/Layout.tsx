import { Layout as LayoutType } from './types'
import {
  BurgerIcon,
  ExperiencesIcon,
  ToolsIcon,
  SkillsIcon,
  ContactsIcon,
} from '@/components'
import useLayout from './useLayout'

const Layout: React.FC<LayoutType> = ({ children }) => {
  const { theme, handleModes, isBurger, setIsBurger, ref } = useLayout()

  if (theme === null) {
    return null
  }

  return (
    <section className={theme}>
      <nav className='fixed grid grid-cols-3 burger:grid-cols-2 tinymid:grid-cols-2 items-center z-[10] px-8 shadow-lg text-white bg-primary dark:bg-primary-dark text-whit h-20 w-screen'>
        <div className='burger:hidden block'>
          <h1 id='name' className='text-2xl italic capitalize font-bold'>
            jarji abuashvili
          </h1>
        </div>
        <ul className='capitalize burger:hidden tinymid:ml-4 flex items-center justify-center gap-2'>
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
        <div
          onClick={() => setIsBurger(!isBurger)}
          className='hidden burger:block'
        >
          <BurgerIcon />
        </div>
        <aside
          ref={ref}
          className={`absolute top-0 ${
            isBurger ? 'left-0' : 'left-[-100%]'
          } transition-all z-10 bg-primary w-4/5 tiny:w-full h-screen hidden burger:block`}
        >
          <ul className='capitalize flex flex-col items-left px-6 tiny:items-center justify-center gap-2 mt-8'>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#skills' className='flex gap-2 capitalize'>
                <SkillsIcon /> skills
              </a>
            </li>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#experiences' className='flex gap-2 capitalize'>
                <ExperiencesIcon /> experiences
              </a>
            </li>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#projects' className='flex gap-2 capitalize'>
                <ToolsIcon /> projects
              </a>
            </li>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#contacts' className='flex gap-2 capitalize'>
                <ContactsIcon /> contacts
              </a>
            </li>
            <li className='tiny:block hidden'>
              <button
                className='capitalize underline text-2xl'
                onClick={() => setIsBurger(false)}
              >
                close
              </button>
            </li>
          </ul>
        </aside>
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
