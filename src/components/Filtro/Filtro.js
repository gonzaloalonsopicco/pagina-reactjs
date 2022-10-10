import './Filtro.css'
import { Link } from 'react-router-dom';

export function Filtro() {
    return (
        <>
            <div className='divAside'>
                <h2 className='tituloFiltro'>categorías</h2>
                <Link to={'/productos'}><p className='componenteFiltro'>Todos</p></Link>
                <Link to={'/productos/placa madre'}><p className='componenteFiltro'>Placas Madre</p></Link>
                <Link to={'/productos/microprocesador'}><p className='componenteFiltro'>Procesadores</p></Link>
                <Link to={'/productos/memoria ram'}><p className='componenteFiltro'>Memorias Ram</p></Link>
                <Link to={'/productos/gabinete'}><p className='componenteFiltro'>Gabinetes</p></Link>
                <Link to={'/productos/fuente de alimentacion'}><p className='componenteFiltro'>Fuentes de Alimentación</p></Link>
            </div>
        </>
    )
}