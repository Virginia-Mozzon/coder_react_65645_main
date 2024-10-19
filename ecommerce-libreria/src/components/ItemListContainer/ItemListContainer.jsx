import React from 'react'
import Button from '../Button/Button'
 
const ItemListContainer = ( {mensaje, fn} ) => {
  return (
    <div>
      <Button text="Agregar al carrito" color="violet" fn={fn}/>
      {mensaje}
    </div>
  )
}

export default ItemListContainer