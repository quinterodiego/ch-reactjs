import React from 'react';

const CartWidget = ({cantidad}) => {
    return <i className="fas fa-shopping-cart text-white ml-2" style={{"fontSize": "25px"}}>{cantidad}</i>;
}

export default CartWidget;