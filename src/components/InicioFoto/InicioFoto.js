import './InicioFoto.css'
import fotoinicio from '../../imagenes/fotoinicio.jpg'


export function InicioFoto(){
    return(
        <>
        <img src={fotoinicio} className="fotoinicio"></img>
        </>
    )
}