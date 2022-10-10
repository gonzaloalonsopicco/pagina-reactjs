import './Header.css';
import { Link } from 'react-router-dom';
import { Carrito } from '../Carrito/Carrito';
import { useState } from 'react';
import iconoHamburguesa from '../../imagenes/hamburguesa.png'

export function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div className='headerDiv'>
            <img src={iconoHamburguesa} alt="" className="iconoHamburguesa" onClick={() => setOpen(!open)} ></img>
            <Link to="/" className='divLogo'><h1 className='headerLogo'>componentes pc</h1></Link>
            <div className='nav'>
                <Link to="/" className='navDiv'><p className='divPalabra'>inicio</p></Link>
                <Link to="/productos" className='navDiv'><p className='divPalabra'>productos</p></Link>
            </div>
            <Carrito></Carrito>
            {
                open &&
                <div className='DivExteriorHamburguesa'>
                    <div className='DivInteriorHamburguesa'>
                        <Link to="/" className='navDivHamburguesa'><p className='divPalabraHamburguesa'>inicio</p></Link>
                        <Link to="/productos" className='navDivHamburguesa'><p className='divPalabraHamburguesa'>productos</p></Link>
                    </div>
                </div>
            }
        </div>
    )
}
