import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../firebase/db_manager';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);

  const {addItem} = useContext(CartContext);

  useEffect(() => {
    getProductById(id)
    .then(res => setProduct(res))
    .catch(e => console.error(e));
  }, [])

  const updateCart = () => {
    addItem(product.id, amount, product.precio ,product.stock);
  }

  return (
    <>
      {product === null ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <h1>{product.nombre}</h1>
          <img src={product.img} alt={`${product.nombre} image`} />
          <h2>{product.autor}</h2>
          <h2>${product.precio}</h2>
          <h2>Stock: {product.stock}</h2>
  
          <h3>Descripción</h3>
          <p>Categoría: {product.genero}</p>
          <p>Sinopsis: {product.sinopsis}</p>
          <p>
            Tapa: {product.tapa}, Páginas: {product.paginas}, Idioma: {product.idioma}
          </p>
          <ItemCount amount={amount} setter={setAmount} product={product}/>
          <button onClick={updateCart}>Comprar</button>
        </div>
      )}
    </>
  );
}

export default ItemDetail