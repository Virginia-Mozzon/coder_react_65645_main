import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { getProducts, getProductsByCategory } from '../../data/backend-falso'
import ItemList from "./ItemList"
 
const ItemListContainer = ( {mensaje, fn} ) => {
  const[products, setProducts] = useState([])
  const[genero, setGenero] = useState("")
  const [cargando, setCargando] = useState(false)
  
  
  useEffect( () =>{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json()).then(res => res)
    
    
    
    setCargando(true)

    if(genero){
      getProductsByCategory(genero)
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(setCargando(false))
    }else{
      getProducts()
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(setCargando(false))
    }
  }, [genero] )

  const changeGenero = (genero) => {
    setGenero(genero)
  }

  

  return (
    <>
    <div>
      <Button text="Agregar al carrito" color="violet" fn={fn}/>
    </div>
    <div>
      <div>
        <Button fn={ () => changeGenero("romance")} text={"romance"} color={"green"}/>
        <Button fn={ () => changeGenero("terror")} text={"terror"} color={"green"}/>
        <Button fn={ () => changeGenero("ficcion")} text={"ficcion"} color={"green"}/>
        <Button fn={ () => changeGenero("")} text={"todos"} color={"green"}/>
      </div>
      {cargando? <h3>Cargando...</h3> : <ItemList products={products}/>}
    </div>
    </>
  )
}

export default ItemListContainer