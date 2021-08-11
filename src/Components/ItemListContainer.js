import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ titulo }) => {
    return (
        <>
            <h2 className="text-center p-5">{ titulo }</h2>
            <div className="row">
                <ItemList />
            </div>
        </>
    );
}

export default ItemListContainer;