import React from 'react';
import Item from './Item';

const ItemList = ( {products, fn, valor} ) => {
    return (
        <div>
            
            { products.map ( (elemento) => {
                return(
                    <Item elemento={elemento} fn={fn} key={elemento.id} valor={valor}/>
                )
            } ) }

        </div>
    )
}

export default ItemList