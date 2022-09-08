import './Carrito.css';
import { Link } from 'react-router-dom';

export function Carrito(){
    return(
        <div>
            <Link to={"/carrito"}>
            <img src="https://cdn-icons-png.flaticon.com/512/4379/4379539.png" width={"50px"}></img>
            <span className='carritoNumero'>0</span>
            </Link>
        </div>
    )
}