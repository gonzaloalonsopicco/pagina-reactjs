import './Filtro.css'
import { Link } from 'react-router-dom';






export function Filtro() {
    return (
        <>
            <div className='divAside'>
                <h2>categorias</h2>
                <Link to={'/productos'}><p>todos</p></Link>
                <Link to={'/productos/placa madre'}><p>Placas de Video</p></Link>
                <Link to={'/productos/microprocesador'}><p>Procesadores</p></Link>
                <Link to={'/productos/memoria ram'}><p>Memorias Ram</p></Link>
                <Link to={'/productos/Gabinetes'}><p>Gabinetes</p></Link>
                <Link to={'/productos/Fuentes de alimentación'}><p>Fuentes de alimentación</p></Link>
                <Link to={'/productos/Almacenamiento'}><p>Almacenamiento</p></Link>
            </div>
        </>
    )
}