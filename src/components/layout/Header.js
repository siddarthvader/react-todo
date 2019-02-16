import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <header>
      <h1>
        TodoList Header
      </h1>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </header>
  )
}

export default Header;