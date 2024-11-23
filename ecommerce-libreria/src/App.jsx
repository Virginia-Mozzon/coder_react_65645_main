import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [valor, setValor] = useState(0)
  

  return (
    <>
      <BrowserRouter> 
        <NavBar valor={valor} >
          <Routes>
            <Route exact path='/' element={<HomeContainer/>}/>
            <Route exact path='/products' element={<ProductsContainer/>}/>
          </Routes>
        </NavBar>
      </BrowserRouter>
      
      <ItemListContainer mensaje="Esta es la entrega de Virginia Mozzon: futuro ecommerce para venta de libros" fn = {setValor} />
    </>
  )
}

export default App
