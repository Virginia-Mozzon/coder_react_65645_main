import { Link } from 'react-router-dom';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = ( {valor} ) => {
  return (
    <div>
      <h1>Entre Líneas</h1>
      
      <button><Link to="/">Inicio</Link></button>
      <button><Link to="/productos">Productos</Link></button>
      <button><Link to="/contacto">Contacto</Link></button>

      <CartWidget valor ={valor} />
    </div>
  )
}

export default NavBar