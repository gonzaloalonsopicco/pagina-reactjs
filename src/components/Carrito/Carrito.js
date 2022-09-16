import './Carrito.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext } from '../../context/CartContext'

export function Carrito(){

    const {totalCantidadProductos} = useContext(CartContext);

    return(
        <div>
            <Link to={"/carrito"}>
            <img src="https://cdn-icons-png.flaticon.com/512/4379/4379539.png" width={"50px"}></img>
            <span className='carritoNumero'>{totalCantidadProductos()}</span>
            </Link>
        </div>
    )
}