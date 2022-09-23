import React from "react"
import { useContext } from "react"
import { CarritoListProductos } from '../CarritoListProductos/CarritoListProductos'

export function CarritoContainer() {

    return (
        <>
            <div>
                <CarritoListProductos></CarritoListProductos>
            </div>
        </>
    )
}