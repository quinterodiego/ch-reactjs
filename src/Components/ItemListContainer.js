import React from 'react';
import Item from './Item';

const ItemListContainer = ({ titulo }) => {
    return (
        <>
            <h2 className="text-center p-5">{ titulo }</h2>
            <Item />
        </>
    );
}

export default ItemListContainer;