import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import SearchBox from '../SearchBox/SearchBox'
import PrimaryButton from '../Buttons/PrimaryButton'

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
        <div className = "darkModeBtnContainer">
          <button className='darkModeBtn'><FontAwesomeIcon icon={faMoon} size="xl" style={{color: "#000000",}} /></button>
        </div>
        <PrimaryButton btnLabel="Login" bgColor="#338CE6" Color='white' hoverColor='#54a5f7'/>
        <PrimaryButton btnLabel="SignUp" bgColor="#3F3F3F" Color='#338CE6' hoverColor='#525252'/>
      </div>
    </>
  )
}

export default Navbar