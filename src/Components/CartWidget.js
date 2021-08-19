import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({cantidad}) => {
    return (
        <> 
            <li className="nav-item list-unstyled">
                <Link className="nav-link" to="/Carrito">
                    <i className="fas fa-shopping-cart text-white ml-2" style={{"fontSize": "20px"}}>{cantidad}</i>
                </Link>
            </li>
        </>
    );
}

export default CartWidget;

