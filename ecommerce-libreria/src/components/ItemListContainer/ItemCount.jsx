import React from 'react'

const ItemCount = ({amount, setter, product}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => setter(amount > 1 ? amount - 1 : 1)}>-</button>
            <span>{amount}</span>
            <button
              onClick={() => setter(amount === product.stock ? amount : amount + 1)}
            >
              +
            </button>
    </div>
  )
}

export default ItemCount