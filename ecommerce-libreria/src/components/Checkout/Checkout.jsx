import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp } from 'firebase/firestore';
import { postPurchase } from '../../firebase/db_manager';

const Checkout = () => {
  const [inputs, setInputs] = useState({});
  const { cart, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: inputs,
      items: Object.entries(cart).map(([id, { amount, price }]) => ({ 
        id: `/libros/${id}`, amount, price 
      })),
      date: Timestamp.fromDate(new Date())
    } 
    
    try {
      const id = await postPurchase(order);
      setOrderId(id);
      clearCart(); 
    } catch (error) {
      console.error("Error posting purchase:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (orderId) {
    return (
      <>
        <h1>Compra realizada con exito!</h1>
        <h2>Order ID: {orderId}</h2>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Teléfono:
        <input 
          type="text" 
          name="phone" 
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Email:
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          </label>
        <input type="submit" />
    </form>
  )
}

export default Checkout