import { Link } from 'react-router-dom';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import GenreButtons from '../GenreButtons/GenreButtons';

const NavBar = () => {
  return (
    <div className='navbar navbar-expand-lg bg-body-tertiary '>
      <Link to={'/'}><img src="./img/logo.png" alt="Logo Entre Líneas. Libro abierto con nombre del sitio por debajo." /></Link>
      <GenreButtons />
      <Link to={'/cart'}><CartWidget/></Link>
    </div>
  )
}

export default NavBar