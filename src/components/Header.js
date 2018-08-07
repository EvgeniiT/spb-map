import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// const Header = <FontAwesomeIcon icon={faCoffee} />



class Header extends Component {
  render() {
    return(
      <header className='Header'>
        <div className='Icon-Container'
          role='Button'
          aria-label='Menu button'
          tabIndex='1'
          onKeyDown={(evt)=>{(evt.key === 'Enter') && (this.props.toggleSideBarClass())}} 
          onClick={() => this.props.toggleSideBarClass()}
        >
          <FontAwesomeIcon icon={faBars} size='2x'/>
        </div>
        <div className='Title-Container'>
          <h1>Super Popular Bar Map</h1>
        </div>
      </header>
    )
  }
}
export default Header;
