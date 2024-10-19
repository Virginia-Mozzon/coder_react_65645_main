import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [valor, setValor] = useState(0)
  

  return (
    <>
      <h1>Entre Líneas</h1>
      <NavBar valor={valor} />
      <ItemListContainer mensaje={"Esta es la entrega de Virginia Mozzon: futuro ecommerce para venta de libros"} fn = {setValor} />
    </>
  )
}

export default App
