import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({elemento}) => {
  return (
    <div className="card h-100" style={{ width: '18rem' }}>
        <h3 className="card-title">{elemento.nombre} - {elemento.autor}</h3>
        <img src={elemento.img} alt="Tapa-libro" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
        <p className="card-text">Género: {elemento.genero}</p>
        <p className="card-text">Stock: {elemento.stock}</p>
        <p className="card-text">$ {elemento.precio}</p>
        <button><Link to={`/productos/${elemento.id}`}>Más detalles</Link> </button>
            
    </div>
  )
}

export default Item