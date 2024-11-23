import { Link } from 'react-router-dom'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = ( {valor} ) => {
  return (
    <div>
      <h1>Entre Líneas</h1>
      <CartWidget valor ={valor} />
      <button><Link to='/'>Inicio</Link></button>
      <button><Link to='/products'>Productos</Link></button>
    </div>
  )
}

export default NavBar