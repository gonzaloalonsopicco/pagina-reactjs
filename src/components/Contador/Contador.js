import './Contador.css'
import { useState } from 'react'

export function Contador({ stock, inicial, agregarCarrito }) {

    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    return (
        <div className='divContador'>
            <div className='divSumaResta'>
                <button className='botonContador' onClick={restar}>-</button>
                <p>{contador}</p>
                <button className='botonContador' onClick={sumar}>+</button>
            </div>
            <button className='boton' onClick={() => (agregarCarrito(contador))}>agregar al carrito</button>
        </div>
    )
}