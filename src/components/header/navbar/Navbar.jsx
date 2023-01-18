import React, {useState, useEffect} from 'react'
import NavbarCSS from './Navbar.module.css'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrollPosition === 0 ? NavbarCSS['nav-up'] : NavbarCSS['nav-down']}>
        <div className={NavbarCSS['nav-child']}>
            <div className={NavbarCSS["nav-child-1"]}>
              <h1>jarji abuashvili - web developer</h1>
            </div>
            <div className={NavbarCSS["nav-child-2"]}>
              <ul>
                <li><a href=''>about</a></li>
                <li><a href=''>skills</a></li>
                <li><a href=''>projects</a></li>
                <li><a href=''>contact</a></li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar