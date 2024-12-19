import { Link } from 'react-router-dom';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import GenreButtons from '../GenreButtons/GenreButtons';



const NavBar = () => {
  return (
    <div>
      <h1>Entre Líneas</h1>
      <Link to={genre}><img src="./img/logo.png" alt="Logo Entre Líneas. Libro abierto con nombre del sitio por debajo." /></Link>
      <GenreButtons />
      <CartWidget valor ={0} />
    </div>
  )
}

export default NavBar