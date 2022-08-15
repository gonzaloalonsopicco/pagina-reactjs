import './Header.css';


function Header(){
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
                <a className='divPalabra' href=''>informacion</a>
                </div>
                <div className='navDiv'>
                <a className='divPalabra' href=''>contacto</a>
                </div>
            </div>
        </div>
    )
}

export default Header;