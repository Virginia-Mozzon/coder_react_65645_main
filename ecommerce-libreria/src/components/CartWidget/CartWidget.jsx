import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';


export default function CartWidget() {
  const {totalItems} = useContext(CartContext);
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{totalItems}</span>
    </div>
  )
}