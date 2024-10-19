import React from 'react'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = ( {valor} ) => {
  return (
    <div>
        <CartWidget valor ={valor} />
    </div>
  )
}

export default NavBar