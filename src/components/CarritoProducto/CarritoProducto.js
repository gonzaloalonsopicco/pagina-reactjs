import './CarritoProducto.css'
import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export function CarritoProducto({item}){

    const {eliminarproducto} = useContext(CartContext);

    return(

        <>
        <div>
                    <div className='divProductosCarrito'>
                        <img src = {item.imagen} alt='' className='imagenCarrito'></img>
                        <h3>{item.nombre}</h3>
                        <p>{item.precio} </p>
                        <p>cantidad {item.cantidad} </p>
                        <button onClick={()=>eliminarproducto(item.id)}>X</button>
                    </div>
        </div>
        </>
    )
}