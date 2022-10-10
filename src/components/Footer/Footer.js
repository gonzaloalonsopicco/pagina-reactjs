import './Footer.css'
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div>
            <div className='divFooter'>
                <div className='divFlexFooter'>
                    <Link to="/" className='divLogo'><h1 className='headerLogo'>componentes pc</h1></Link>
                    <p className='textoFooter'>©Copyright 2022 componentes pc - Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    )
}