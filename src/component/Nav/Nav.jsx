import React from "react";
import './Nav.scss';
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__item'><NavLink className='nav__item-link' to="/profile">Profile</NavLink></div>
      <div className="nav__item"><NavLink className='nav__item-link' to="/dialogs">Messages</NavLink></div>
      <div className="nav__item"><NavLink className='nav__item-link' to="/news">News</NavLink></div>
      <div className="nav__item"><NavLink className='nav__item-link' to="/music">Music</NavLink></div>
      <div className="nav__item"><NavLink className='nav__item-link' to="/friends">Friends</NavLink></div>
      <div className="nav__item"><NavLink className='nav__item-link' to="/settings">Settings</NavLink></div>
    </nav>
  )
}

export default Nav;
