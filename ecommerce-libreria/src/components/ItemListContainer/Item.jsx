import React from 'react'

const Item = ({elemento}) => {
  return (
    <div>
        <h3>{elemento.nombre}</h3>
        <img src={elemento.img} alt="Tapa-libro" width={"300px"} height={"400px"} />
        <p>Género: {elemento.genero}</p>
        <p>$ {elemento.precio}</p>
    </div>
  )
}

export default Item