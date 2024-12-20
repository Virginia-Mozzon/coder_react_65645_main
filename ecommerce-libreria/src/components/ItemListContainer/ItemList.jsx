import React from 'react';
import Item from './Item';

const ItemList = ( {products } ) => {
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            
            { products.map ( (elemento) => {
                return(
                    <Item elemento={elemento} key={elemento.id}/>
                )
            } ) }

        </div>
    )
}

export default ItemList