import React from 'react';
import {NavLink} from 'react-router-dom'
import './header.sass';

const Header = () => (
  <header className="header">
    <img src="/img/logo.png" alt="Logo"/>
    <nav className="header-nav">
      <ul className="header-nav__ul">
        <li className="header-nav__item">
          <NavLink className="header-nav__link" 
          to='/' exact>Главная</NavLink>
        </li>
        <li className="header-nav__item">
          <NavLink className="header-nav__link" 
          to='/categories'>Список категорий</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;