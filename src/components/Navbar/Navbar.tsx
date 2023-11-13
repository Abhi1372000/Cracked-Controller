// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import SearchBox from '../SearchBox/SearchBox'

import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div className='logoContainer'>
          <img src="../../../public/broken-gamepad-cartoon-illustration-game-addict-2.jpg" alt="logo" className='navbarLogo'/>
          <p>Cracked Controller</p>
        </div>
        <SearchBox />
      </div>
    </>
  )
}

export default Navbar