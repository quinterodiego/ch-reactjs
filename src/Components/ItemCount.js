import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
    const [ enStock, setEnStock] = useState(parseInt(stock));
    const [ inicial, setInicial] = useState(parseInt(initial));

    const onIncrementar = () => {
        if(inicial < stock) {
            setInicial( inicial + 1 );
        }
    }

    const onDecrementar = () => {
        if(inicial > 0) {
            setInicial( inicial - 1 );
        }
    }

    const onAdd = () => {
        if(inicial <= enStock){
            setEnStock(enStock - inicial);
        }
    }

    return (
        <>
            <button className="btn btn-dark m-2" onClick={ onDecrementar }>-</button>
            <span>{inicial}</span>
            <button className="btn btn-dark m-2" onClick={ onIncrementar }>+</button>
            <br/>
            <button className="btn btn-dark" onClick={ onAdd }>Agregar al carrito</button>
            <h4 className="alert alert-light" role="alert">
                Stock: {enStock}
            </h4>
        </>
    );
}

export default ItemCount;