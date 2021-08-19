import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import categorias from '../Apis/categorias';

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorias);
        }, 500)
    });
}

const Categorias = () => {

    const [ categoria, setCategoria ] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        getItems()
            .then(data => setCategoria(data[Number(idCategoria) - 1]));
    }, []);

    const Renderiza = () => {
        return (
            <div className="row mt-5">
                <div className="col-md-5"></div>
                <div className="col-md-2 text-center">
                    <h3>{categoria.name}</h3>
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

export default Categorias;