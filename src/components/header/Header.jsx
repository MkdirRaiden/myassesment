import React, { useState } from 'react';
import './header.css';
import {RxHamburgerMenu} from 'react-icons/rx';

const Header = () => {

  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  return (
    <div className='header'>
     <h1 className='logo'>LOGO</h1>
     <nav className={showDropDownMenu ? "navbar drop-down-navbar" : "navbar"}>
      <a href="#">All Events</a>
      <a id='my-events' href="#">My Events</a>
      <a href="#">Create Event</a>
      <a href="#">Likes</a>
      <a className='active' href="#">Login</a>
     </nav>
     {
         <div className='hamburgar-menu' onClick={() => setShowDropDownMenu(!(showDropDownMenu))}>
          <RxHamburgerMenu/>
       
         </div>
      }
    </div>
  )
}

export default Header
