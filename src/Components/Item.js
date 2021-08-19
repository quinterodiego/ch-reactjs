import React from 'react';
import ItemCount from './ItemCount';
import { useHistory } from 'react-router-dom';

const divStyle = {
    width: 300
}

const Item = ({ id, title, description, price, pictureUrl }) => {

    const history = useHistory();

    const goToItem = () => history.push(`/Detalle/${id}`);

    return (
        <>
            <div className="card text-center m-auto" style={divStyle}>
                <img className="card-img-top" src={ pictureUrl } alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text"> DESCRIPCION: { description }</p>
                    <p className="card-text">PRECIO: { price }</p>
                    <button className="btn btn-dark" onClick={goToItem}>Ver detalle</button>
                    <br/>
                    <ItemCount stock="5" initial="1" />
                </div>
            </div>
        </>
    )
}

export default Item;