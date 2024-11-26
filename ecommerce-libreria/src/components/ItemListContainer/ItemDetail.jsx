import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/backend-falso';

const ProductDetail = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProductById(id))
  })

  return (
    <>
      <h1>{product.nombre}</h1>
      <img src={product.img} alt="" />
      <h2>{product.autor}</h2>
      <h2>${product.precio}</h2>

      <h3>Descripción</h3>
      <p>Categoría: {product.genero}</p>
      <p>Sinopsis: {product.sinopsis}</p>
      <p>Tapa: {product.tapa}, Páginas: {product.paginas}, idioma: {product.idioma}</p>
    </>
  )
}

export default ProductDetail