import './InicioDestacado.css'
import { ItemList } from '../ItemList/ItemList'

export function InicioDestacado() {
    return (
        <div className='divInicio'>
            <h2 className='tituloInicio'>productos destacados</h2>
            <div className='divProductosDestacados'>
                <ItemList />
            </div>
        </div>
    )
}