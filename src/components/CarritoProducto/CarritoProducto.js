import './CarritoProducto.css'
import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export function CarritoProducto({ item }) {

    const { eliminarproducto } = useContext(CartContext);

    return (

        <>
            <div>
                <div className='divProductosCarrito'>
                    <img src={item.imagen} alt='' className='imagenCarrito'></img>
                    <h3>{item.nombre}</h3>
                    <p>precio: ${item.precio} </p>
                    <p>cant: {item.cantidad} </p>
                    <p>subtotal: ${item.subTotal} </p>
                    <button className='eliminarProductosCarrito' onClick={() => eliminarproducto(item.id)}>X</button>
                </div>
            </div>
        </>
    )
}