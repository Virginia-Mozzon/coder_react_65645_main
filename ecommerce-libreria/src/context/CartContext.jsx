import { createContext, useState } from 'react';

export const CartContext = createContext(false);

export function CartProvider({children}) {
    const [cart, setCart] = useState({});
    const [totalItems, setTotal] = useState(0);

    const addItem = (id, amount, price, stock) => {
        if (cart[id]) {
            const newCart = { ...cart };
            const oldAmount = newCart[id]["amount"];
            
            if ((oldAmount + amount) >= stock) {
                newCart[id]["amount"] = stock;
                const newTotal = totalItems + (stock - oldAmount);
                setTotal(newTotal);
            } else {
                newCart[id]["amount"] += amount;
                setTotal(totalItems + amount);
            }
            setCart(newCart);
        } else {
            setCart({ ...cart, [id]: {"amount": amount, "price": price}});
            setTotal(totalItems + amount);
        }
    };

    
    const dropItem = (id) => {
        const newCart = { ...cart };
        const amount = newCart[id]["amount"];
        const newTotal = totalItems - amount;
        delete newCart[id];
        setCart(newCart);
        setTotal(newTotal);
    }
    
    const decItem = (id) => {
        const newCart = { ...cart };
        const amount = newCart[id]["amount"];
        const newTotal = totalItems - 1;
        if (amount > 1) {
            newCart[id]["amount"] = amount - 1;
            setCart(newCart);
            setTotal(newTotal);
        }
    }

    const incItem = (id, stock) => {
        const newCart = { ...cart };
        const amount = newCart[id]["amount"];
        const newTotal = totalItems + 1;
        if (amount < stock) {
            newCart[id]["amount"] = amount + 1;
            setCart(newCart);
            setTotal(newTotal);
        }
    }

    const clearCart = () => {
        setCart({});
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{cart, clearCart, addItem, totalItems, dropItem, decItem, incItem}}>
            {children}
        </CartContext.Provider>
    )
}