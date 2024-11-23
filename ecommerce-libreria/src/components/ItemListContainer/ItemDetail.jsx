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
      <h1>Vista de Detalle de producto {id}</h1>
      <p>ID: {product.id}</p>
      <h3>Nombre: {product.nombre}</h3>
      <img src={product.img} alt="" />
      <p>Descripcion: {product.descripcion}</p>
      <p>Categoria: {product.genero}</p>
      <p>Precio ${product.precio}</p>
    </>
  )
}

export default ProductDetail