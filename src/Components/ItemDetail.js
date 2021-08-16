import React from 'react';

const ItemDetail = ({ pictureUrl, title, price, description }) => {
    return (
        <>
            <div className="card text-center m-auto">
                <img className="card-img-top" src={ pictureUrl } alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text"> DESCRIPCION: { description }</p>
                    <p className="card-text">PRECIO: { price }</p>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;