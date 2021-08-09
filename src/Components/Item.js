import React from 'react';
import ItemCount from './ItemCount';

const divStyle = {
    width: 300
}

const inicial = 1;

const Item = () => {
    return (
        <>
            <div className="card text-center m-auto" style={divStyle}>
                <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <ItemCount stock="5" initial="1" />
                </div>
            </div>
        </>
    )
}

export default Item;