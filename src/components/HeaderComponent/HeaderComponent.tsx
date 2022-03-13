import React from 'react'
import './HeaderComponent.styles.scss'
import logo from '../../assets/images/ayush-logo/ayush-logo.png';
import yoga_Logo from '../../assets/images/yoga_logo/yoga_logo.png'

export default function HeaderComponent() {
  return (
    <header>
      <nav className='navbar'>
        <span className='d-block logo'><img src={logo} alt="ayush-logo" /></span>
        <div className='d-flex'>
          <ul className='menu'>
            <li className='menu-item mx-1'> <button className="btn btn-secondary">home</button> </li>
            <li className='menu-item mx-1'> <button className="btn btn-secondary">register</button> </li>
            <li className='menu-item mx-1'> <button className="btn btn-secondary">login</button> </li>
          </ul>
          <span className='d-block logo'><img src={yoga_Logo} alt="ayush-logo" /></span>
        </div>
      </nav>
    </header>
  )
}
