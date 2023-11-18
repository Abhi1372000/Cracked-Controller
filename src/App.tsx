import Navbar from './components/Navbar/Navbar'
import Screen from './screens/Screen'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import './App.css'
import { useState } from 'react';


function App() {

  const [darkmod, setDarkMod] = useState(false)

  const navbarContainerStyle: React.CSSProperties = {
    display: 'flex',
    backgroundColor: "#151515",
    justifyContent: "center",
    alignItems: 'center',
    padding: '0px 10px',
  }

  function handleDarkMode(){
    if(darkmod){
      setDarkMod(false)
      console.log(darkmod)
    }else{
      setDarkMod(true)
      console.log(darkmod)
    }
  }


  return (
  <>
    <div className='navbarContainer' style={navbarContainerStyle}>
      <Navbar />
      <div className="darkModeBtnContainer">
          <button className="darkModeBtn" onClick={handleDarkMode}>
            <FontAwesomeIcon
              icon={faMoon}
              size="xl"
              style={{ color: "#000000" }}
            />
          </button>
        </div>
    </div>
    <Screen drkMod={darkmod}/>
  </>
  )
}

export default App
