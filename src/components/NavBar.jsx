import PropTypes from 'prop-types'
import React from "react"

function NavBar({text, bgColor, txtColor}) {

  const navStyles = {
    backgroundColor: bgColor,
    color: txtColor
  }

  return (
    <header className="navContainer" style={navStyles}>
        <div className='navComponent'>
            <h2>{text}</h2>
        </div>
        <div className='navComponent'>
            <h2>{text}</h2>
        </div>
        <div className='navComponent'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}


//Props customizations
NavBar.defaultProps = {
  text: 'Security News Threat',
  bgColor: 'rgba(0,0,0,0.4)',
  txtColor:'#ff342a'
}

NavBar.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  txtColor: PropTypes.string
}
export default NavBar