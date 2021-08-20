import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from './../Apis/productos';
import ItemDetail from './ItemDetail';

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 500)
    });
}

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        getItems()
            .then(data => setItem(data[Number(idItem) - 1]));
    }, []);

    const Renderiza = () => {
        return (
            <div className="row mt-5">
                <div className="col-md-5"></div>
                <div className="col-md-2 text-center">
                    <h3>Detalle de Item</h3>
                    <ItemDetail pictureUrl={item.pictureUrlDetail} title={item.title} price={item.price} description={item.description} />
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