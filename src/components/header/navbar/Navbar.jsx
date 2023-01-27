import NavbarCSS from './Navbar.module.css'

const Navbar = ({handleSideBar}) => {
  return (
    <nav className={NavbarCSS['nav-down']}>
        <div className={NavbarCSS['nav-child']}>
            <div className={NavbarCSS["nav-child-1"]}>
              <h1>jarji abuashvili - web developer</h1>
            </div>
            <div className={NavbarCSS["nav-child-2"]}>
              <ul>
                <li><a href='#about'>about</a></li>
                <li><a href='#skills'>skills</a></li>
                <li><a href='#portfolio'>portfolio</a></li>
                <li><a href='#experience'>experience</a></li>
                <li><a href='#footer'>contact</a></li>
              </ul>
              <button onClick={handleSideBar}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar