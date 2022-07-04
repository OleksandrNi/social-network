import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = (props) => {
  console.log(props)
  return (
    <header className='header'>
      <img src="https://media.istockphoto.com/photos/golden-color-leaves-picture-id1292900780?b=1&k=20&m=1292900780&s=170667a&w=0&h=gcrXIM9RO0E6ybWcWb_AC-ISaGhYU7MRfXFs5a-UYcU=" alt="logo" />
      <div className="header__login">
        {props.isAuth 
          ? props.login
          :  <NavLink to={'/login'}>
            login
      </NavLink>
      }
        
      </div>
    </header>
  )
}

export default Header;
