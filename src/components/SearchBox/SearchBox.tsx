import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './SearchBox.css'

const SearchBox = () => {

    const searchBoxBtnStyle = {
        "height": "3rem",
        "width": "5rem",
        "border-radius": "1rem",
        "border": "none",
    }
    const searchBoxInputStyle = {
        "width": "60rem",
        "height": "3rem",
        "border-radius": "1rem",
        "margin": "0 0.5rem",
        "padding": "0 0.5rem",
        "border": "none",
        "font-size": "1.1rem",
        "font-weight": "550",
        "text-align": "right",
    }

  return (
    <>
    <div className='searchBoxContainer'>
        <input type="text" name="searchBox" id="searchBox" style={searchBoxInputStyle} className='searchBoxInput' placeholder='Search for games'/>
        <div className='searchBoxBtnContainer'>
            <button className='searchBoxBtn' style={searchBoxBtnStyle}><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#000000",}} /></button>
        </div>
    </div>
    </>
  )
}

export default SearchBox