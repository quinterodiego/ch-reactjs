import React from 'react';

const saludo = "Bienvenido a mi proyecto!";

class ItemListContainer extends React.Component {
    render() {
        return <h2 className="text-center p-5">{ saludo }</h2>;
    }
}

export default ItemListContainer;