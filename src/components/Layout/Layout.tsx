import { Layout as LayoutType } from './types'

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <nav className='fixed flex items-center justify-between px-8 text-white bg-primary h-20 w-screen'>
        <div>
          <h1 id='name' className='text-2xl italic font-bold'>
            jarji abuashvili
          </h1>
        </div>
        <ul className='capitalize flex gap-2'>
          <li>about</li>
          <li>skills</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </nav>
      <main className='bg-[url("/images/gray-background.jpg")]'>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
