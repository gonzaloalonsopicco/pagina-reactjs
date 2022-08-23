import { Carrito } from '../Carrito/Carrito';
import './Header.css';


export function Header(){
    return(
        <div className='headerDiv'>
            <div>
                <h1 className='headerLogo'>componentes pc</h1>
            </div>
            <div className='nav'>
                <div className='navDiv'>
                    <a className='divPalabra' href=''>inicio</a>
                </div>
                <div className='navDiv'>
                <a className='divPalabra' href=''>productos</a>
                </div>
                <div className='navDiv'>
                <a className='divPalabra' href=''>contacto</a>
                </div>
            </div>
            <Carrito></Carrito>
        </div>
    )
}

