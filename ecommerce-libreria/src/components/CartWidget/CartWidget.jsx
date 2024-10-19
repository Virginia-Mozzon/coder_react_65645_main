import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidget = ( {valor} ) => {
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{valor}</span>
    </div>
  )
}

export default CartWidget