import { Layout as LayoutType } from './types'
import {
  BurgerIcon,
  ExperiencesIcon,
  ToolsIcon,
  SkillsIcon,
  ContactsIcon,
  LangSwitchIcon,
} from '@/components'
import useLayout from './useLayout'

const Layout: React.FC<LayoutType> = ({ children }) => {
  const {
    theme,
    handleModes,
    isBurger,
    setIsBurger,
    burgerRef,
    langRef,
    setShouldDropDown,
    shouldDropDown,
    i18n,
    t,
  } = useLayout()

  if (theme === null) {
    return null
  }

  return (
    <section className={theme}>
      <nav className='fixed grid grid-cols-3 burger:grid-cols-2 tinymid:grid-cols-2 items-center z-[10] tinysm:flex tinysm:justify-between px-8 tinysm:px-0 tinysm:pl-4 shadow-lg text-white bg-primary dark:bg-primary-dark text-whit h-20 w-screen'>
        <div className='burger:hidden block'>
          <h1 id='name' className='text-2xl italic capitalize font-bold'>
            {t('name')}
          </h1>
        </div>
        <ul className='capitalize burger:hidden tinymid:ml-4 flex items-center justify-center gap-2'>
          <li>
            <a href='#skills' className='capitalize'>
              {t('skills')}
            </a>
          </li>
          <li>
            <a href='#experiences' className='capitalize'>
              {t('experiences')}
            </a>
          </li>
          <li>
            <a href='#projects' className='capitalize'>
              {t('projects')}
            </a>
          </li>
          <li>
            <a href='#contacts' className='capitalize'>
              {t('contacts')}
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
          ref={burgerRef}
          className={`absolute top-0 ${
            isBurger ? 'left-0' : 'left-[-100%]'
          } transition-all z-10 bg-primary w-4/5 tiny:w-full h-screen hidden burger:block`}
        >
          <ul className='capitalize flex flex-col items-left px-6 tiny:items-center justify-center gap-2 mt-8'>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#skills' className='flex gap-2 capitalize'>
                <SkillsIcon /> {t('skills')}
              </a>
            </li>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#experiences' className='flex gap-2 capitalize'>
                <ExperiencesIcon /> {t('experiences')}
              </a>
            </li>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#projects' className='flex gap-2 capitalize'>
                <ToolsIcon /> {t('projects')}
              </a>
            </li>
            <li className='my-2 text-2xl' onClick={() => setIsBurger(false)}>
              <a href='#contacts' className='flex gap-2 capitalize'>
                <ContactsIcon /> {t('contacts')}
              </a>
            </li>
            <li className='tiny:block hidden'>
              <button
                className='capitalize underline text-2xl'
                onClick={() => setIsBurger(false)}
              >
                {t('close')}
              </button>
            </li>
          </ul>
        </aside>
        <ul className='flex justify-end items-center pr-2 tinysm:pr-0'>
          <li
            onClick={() => handleModes(theme === 'light' ? 'dark' : 'light')}
            className="flex dark:bg-[url('images/night-bg.avif')] bg-contain bg-repeat bg-center bg-[url('images/sun-bg.avif')] w-[40px] p-[3px] h-[22px] rounded-full cursor-pointer"
          >
            <div className='relative w-full h-full'>
              <div className="absolute right-1/2 dark:right-0 transition-all w-3/6 h-full bg-cover bg-center bg-[url('images/sun.png')] dark:bg-[url('images/moon.png')] rounded-full"></div>
            </div>
          </li>
          <li>
            <button
              className='text-white capitalize tracking-[1px] gap-2 px-4 py-2.5 text-center inline-flex items-center'
              type='button'
              onClick={() => setShouldDropDown((prev) => !prev)}
            >
              {localStorage.getItem('locale') === 'ka' ? 'ქარ' : 'Eng'}
              <div className='mt-1'>
                <LangSwitchIcon />
              </div>
            </button>
            {shouldDropDown && (
              <div
                ref={langRef}
                className='z-10 absolute bg-white divide-y tinysm:right-[5px] divide-gray-100 rounded-lg shadow'
              >
                <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
                  <li>
                    <button
                      onClick={() => {
                        setShouldDropDown((prev) => !prev)
                        i18n.changeLanguage('en')
                        localStorage.setItem('locale', 'en')
                      }}
                      className='block w-full px-4 py-2 hover:bg-gray-100 text-black'
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShouldDropDown((prev) => !prev)
                        i18n.changeLanguage('ka')
                        localStorage.setItem('locale', 'ka')
                      }}
                      className='block w-full px-4 py-2 hover:bg-gray-100 text-black'
                    >
                      ქართული
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <main className='text-black dark:text-white bg-[url("/images/gray-background.jpg")] dark:bg-[url("/images/darkmode.png")]'>
        {children}
      </main>
    </section>
  )
}

export default Layout
