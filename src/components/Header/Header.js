import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <h1 className="b">Facebook</h1>
        <div>
          <span className="a">Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  )
}

export default Header;