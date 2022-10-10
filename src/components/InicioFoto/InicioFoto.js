import './InicioFoto.css'
import fotoinicio from '../../imagenes/fotoinicio.jpg'

export function InicioFoto() {
    return (
        <>
            <img src={fotoinicio} alt="" className="fotoinicio"></img>
        </>
    )
}