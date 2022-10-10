import './Carrito.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'

export function Carrito() {

    const { totalCantidadProductos } = useContext(CartContext);

    return (
        <Link to={"/carrito"}>
            <div className='divCarrito'>
                <img src="https://cdn-icons-png.flaticon.com/512/4379/4379539.png" alt='' className='iconoCarrito' width={"50px"}></img>
                <span className='carritoNumero'>{totalCantidadProductos()}</span>
            </div>
        </Link>
    )
}