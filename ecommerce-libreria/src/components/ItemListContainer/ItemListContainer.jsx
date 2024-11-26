import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { getProducts, getProductsByCategory } from '../../data/backend-falso';
import ItemList from "./ItemList";
 

const ItemListContainer = ( {fn, valor} ) => {
  const[products, setProducts] = useState([])
  const[genero, setGenero] = useState("")
  // const [cargando, setCargando] = useState(false)
  
  
  useEffect( () =>{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json()).then(res => res)
    
    
    
    // setCargando(true)

    if(genero){
      getProductsByCategory(genero)
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(
        //setCargando(false)
        console.log("Se proceso promesa con filtro")
      )
    }else{
      getProducts()
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(
        //setCargando(false)
        console.log("Se proceso promesa sin filtro")
      )
    }
  }, [genero] )

  const changeGenero = (genero) => {
    setGenero(genero)
  }

  

  return (
    <>
    
    <div>
      <div>
        <Button fn={ () => changeGenero("romance")} text={"Romance"} color={"green"}/>
        <Button fn={ () => changeGenero("terror")} text={"Terror"} color={"green"}/>
        <Button fn={ () => changeGenero("ficción")} text={"Ficción"} color={"green"}/>
        <Button fn={ () => changeGenero("")} text={"Todos"} color={"green"}/>
      </div>
      {/* {cargando? <h3>Cargando...</h3> : <ItemList products={products}/>} */}
      <ItemList products={products} fn={fn} valor={valor}/>
    </div>
    </>
  )
}

export default ItemListContainer