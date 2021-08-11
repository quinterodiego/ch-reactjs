import React from 'react';
import ItemCount from './ItemCount';

const divStyle = {
    width: 300
}


const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <>
            <div className="card text-center m-auto" style={divStyle} key={id}>
                <img className="card-img-top" src={ pictureUrl } alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text"> DESCRIPCION: { description }</p>
                    <p className="card-text">PRECIO: { price }</p>
                    <ItemCount stock="5" initial="1" />
                </div>
            </div>
        </>
    )
}

export default Item;