import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./../Components/NavBar";
import ItemListContainer from './../Components/ItemListContainer';
import ItemDetailContainer from './../Components/ItemDetailContainer';
import Categorias from '../Components/Categorias';
import Cart from './../Components/Cart';
import NotFound from './../Components/NotFound';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={ItemListContainer} />
                    <Route path='/Categorias/:idCategoria' component={Categorias} />
                    <Route path='/Detalle/:idItem' component={ItemDetailContainer} />
                    <Route path='/Carrito' component={Cart} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Router;