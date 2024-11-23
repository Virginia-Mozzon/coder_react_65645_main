import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import HomeContainer from './components/HomeContainer/HomeContainer.jsx'
import ItemDetail from './components/ItemListContainer/ItemDetail.jsx'
import ContactContainer from './components/ContactContainer/ContactContainer.jsx'
import ErrorComponent from './components/ErrorComponent/ErrorComponent.jsx'


function App() {
  const [valor, setValor] = useState(0)
  

  return (
    <>
      <BrowserRouter> 
        <NavBar valor={valor} />
          <Routes>
            <Route exact path="/" element={<HomeContainer/>}/>
            <Route exact path="/productos" element={<ItemListContainer fn = {setValor} valor={valor}/>} />
            <Route exact path="/contacto" element={<ContactContainer />} />
            
            <Route exact path="/productos/:id" element={<ItemDetail/>}/>
            <Route path="*" element={<ErrorComponent />} /> 
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
