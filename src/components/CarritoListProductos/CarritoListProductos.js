import './CarritoListProductos.css'
import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {CarritoProducto} from '../CarritoProducto/CarritoProducto.js'



export function CarritoListProductos(){
     const {productoCarrito, eliminarTodosProductos} = useContext(CartContext)

    return(
        <>
        <div>
            <p>productos carrito</p>
            <div className="divBotonVaciarCarrito">
                <button onClick={eliminarTodosProductos}>vaciar carrito</button>
            </div>
            
            {
                productoCarrito.map(item=>(
                    <CarritoProducto key={item.id} item={item} ></CarritoProducto>
                ))
            }
        </div>
        </>
    )
}