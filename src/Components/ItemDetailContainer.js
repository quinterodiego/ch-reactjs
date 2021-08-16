import React, { useState, useEffect } from 'react';
import productos from './../Apis/productos';
import ItemDetail from './ItemDetail';

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    });
}

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([]);

    useEffect(() => {
        getItems()
            .then(data => setItem(data[0]));
    }, []);

    const Renderiza = () => {
        return (
            <div className="row mt-5">
                <div className="col-md-5"></div>
                <div className="col-md-2 text-center">
                    <h3>Detalle de Item</h3>
                    <ItemDetail pictureUrl={item.pictureUrl} title={item.title} price={item.price} description={item.description} />
                </div>
                <div className="col-md-5"></div>
            </div>
        );
    }

    return (
        <>
            { Renderiza() }
        </>
    );
}

export default ItemDetailContainer;