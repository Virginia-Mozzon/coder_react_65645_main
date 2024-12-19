import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetail from './components/ItemListContainer/ItemDetail.jsx'
import ErrorComponent from './components/ErrorComponent/ErrorComponent.jsx'


function App() {
  return (
    <>
      <BrowserRouter> 
        <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />}/>
            <Route exact path="/genre/:genero" element={<ItemListContainer />} />
            <Route exact path="/productos/:id" element={<ItemDetail/>}/>
            <Route path="*" element={<ErrorComponent />} /> 
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
