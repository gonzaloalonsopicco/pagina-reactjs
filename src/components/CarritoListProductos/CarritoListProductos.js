import './CarritoListProductos.css'
import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { CarritoProducto } from '../CarritoProducto/CarritoProducto.js'
import { Formulario } from "../Formulario/Formulario"



export function CarritoListProductos() {
    const { productoCarrito, eliminarTodosProductos, precioFinalCarrito } = useContext(CartContext)

    return (
        <>
            {
                productoCarrito.length > 0 ?
                    <>
                        <p>productos carrito</p>
                        <div className="divBotonVaciarCarrito">
                            <button onClick={eliminarTodosProductos}>vaciar carrito</button>
                        </div>

                        {
                            productoCarrito.map(item => (
                                <CarritoProducto key={item.id} item={item} ></CarritoProducto>
                            ))
                        }
                        <hr></hr>
                        <div className='precioFinal'>
                            <p>TOTAL :</p>
                            <p>{precioFinalCarrito()}</p>
                        </div>
                        <Formulario></Formulario>
                    </>
                    :
                    <>
                    <div className='divSinProductoscarrito'>
                        <div className='divSinProductos'>
                            <p>no hay productos en el carrito</p>
                            <Link to={"/productos"}><button className='boton'>volver a los productos</button></Link>
                        </div>
                    </div>
                        
                    </>
            }
        </>
    )
}