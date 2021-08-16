import React, { useState, useEffect } from 'react';
import Item from './Item';
import productos from './../Apis/productos';

const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

const ItemList = () => {

    const [ products, setProducts] = useState([]);

    useEffect(async () => {
        var productTemp = await(getDatos());
        setProducts(productTemp);
    }, [])

    const renderizaLista = () => {
        return products.map(p => <Item key={p.id} id={p.id} title={p.title} description={p.description} price={p.price} pictureUrl={p.pictureUrl} />);
    }

    return (
        <>
            { renderizaLista() } 
        </>
    )
}

export default ItemList;