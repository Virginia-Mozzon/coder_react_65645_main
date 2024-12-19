import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { getProducts, getProductsByCategory } from '../../data/backend-falso';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
 

const ItemListContainer = () => {
  const { genero } = useParams();
  const[products, setProducts] = useState([])
    
  useEffect( () => {    
    if (!genero) {
      getProducts()
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(console.log("Se proceso promesa sin filtro"))
    } else {
      getProductsByCategory(genero)
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(console.log("Se proceso promesa con filtro"))
    }
  }, [genero] )
  
  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer