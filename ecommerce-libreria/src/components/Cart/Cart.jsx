import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { getProductById } from '../../firebase/db_manager.js';
import CartCard from '../CartCard/CartCard.jsx';
import Button from '../Button/Button';

const Cart = () => {
    const { cart, clearCart, totalItems } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productEntries = await Promise.all(
                Object.entries(cart).map(async ([id, { amount }]) => {
                    const product = await getProductById(id);
                    return { ...product, amount };  
                }
            ));
            setProducts(productEntries); // Save the resolved products
        };

        fetchProducts();
    }, [cart]);

    return (
        <>
            <h1>Carrito</h1>
            <h2>Total de items: {totalItems}</h2>
            <button onClick={clearCart}>Vaciar carrito</button>
            {products.map((product) => (
                <CartCard 
                    product={product} 
                    amount={product.amount} 
                    key={product.id} 
                />
            ))}
            <Button text="Checkout" to={'/checkout'} color={"green"} />
        </>
    );
};

export default Cart;
