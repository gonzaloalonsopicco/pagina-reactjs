import './Header.css';
import { Link } from 'react-router-dom';
import { Carrito } from '../Carrito/Carrito';




export function Header(){
    return (
        <div className='headerDiv'>
            <Link to="/" className='divLogo'><h1 className='headerLogo'>componentes pc</h1></Link>
            <div className='nav'>
                <Link to="/" className='navDiv'><a className='divPalabra'>inicio</a></Link>                
                <Link to="/productos" className='navDiv'><a className='divPalabra'>productos</a></Link>  
                <div className='navDiv'><a className='divPalabra'>contacto</a></div>
                {/* <Link to="/contacto" className='navDiv'><a className='divPalabra'>contacto</a></Link> */}
            </div>
            <Carrito></Carrito>
        </div>
    )
}

