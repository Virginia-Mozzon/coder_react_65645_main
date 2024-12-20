import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';

const CartCard = ({product, amount}) => {
    const {dropItem, decItem, incItem} = useContext(CartContext);
    const [cardAmount, setAmount] = useState(amount);

    return (
        <div style={{backgroundColor: 'lightgray', padding: '10px', margin: '10px'}}>
            <h3>{product.nombre}</h3>
            <p>Stock: {product.stock}</p>
            <p>Precio total: ${product.precio * cardAmount }</p>
            <button onClick={() => dropItem(product.id)}>Eliminar</button>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <button onClick={() => {
                    setAmount(cardAmount > 1? cardAmount - 1: 1);
                    decItem(product.id);
                }}>-</button>
                <span>{cardAmount}</span>
                <button onClick={() => {
                    setAmount(cardAmount == product.stock? cardAmount : (cardAmount + 1));
                    incItem(product.id, product.stock);
                }}>+</button>
            </div>
        </div>
    )
}

export default CartCard