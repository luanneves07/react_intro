import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <h1>LuanBook</h1>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  )
}

export default Header;