import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx'

const Item = ({elemento}) => {
  return (
    <div>
        <h3>{elemento.nombre} - {elemento.autor}</h3>
        <img src={elemento.img} alt="Tapa-libro" width={"300px"} height={"400px"} />
        <p>Género: {elemento.genero}</p>
        <p>$ {elemento.precio}</p>
        <button><Link to={`/productos/${elemento.id}`}>Más detalles</Link> </button>
            
    </div>
  )
}

export default Item