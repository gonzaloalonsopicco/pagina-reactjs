import './Contador.css'
import { useState } from 'react'

export function Contador({stock, inicial, agregarCarrito}){

    const[contador, setContador] = useState(inicial);


    const sumar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = ()=>{
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    return(
        <div className='divContador'>
            <h3>productos agregados : {contador}</h3>
            <div>
                <button className='botonContador' onClick={restar}>eliminar</button>
                <button className='botonContador' onClick={sumar}>agregar</button>
            </div>
            <button className='botonContador' onClick={()=>(agregarCarrito(contador))}>agregar al carrito</button>
        </div>
    )
}



/* contenedor padre

export function ItemListContainer(){

    const agregar = (contador)=>{
        console.log(`productos agregados:${contador}`)
      }

    return(
        <Contador  stock={10} inicial={1} agregarCarrito={agregar}></Contador>
    )
}

*/