import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetail from './components/ItemListContainer/ItemDetail.jsx'
import ErrorComponent from './components/ErrorComponent/ErrorComponent.jsx'
import {CartProvider} from './context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter> 
          <NavBar />
          <div className="container-fluid d-flex flex-column min-vh-100 mt-5">
            <h1 className='display-3'>Entre Líneas</h1>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />}/>
              <Route exact path="/genre/:genero" element={<ItemListContainer />} />
              <Route exact path="/productos/:id" element={<ItemDetail/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/checkout" element={<Checkout/>}/>
              <Route path="*" element={<ErrorComponent />} /> 
            </Routes> 
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
