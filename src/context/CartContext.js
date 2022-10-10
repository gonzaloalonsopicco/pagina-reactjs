import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [productosCarritoList, setProductoCarritoList] = useState([]);

    const isInCart = (id) => {
        const productoExiste = productosCarritoList.some((elemento) => elemento.id === id);
        return productoExiste;
    }

    const anadirProducto = (product, cant) => {
        const newList = [...productosCarritoList];
        if (isInCart(product.id)) {
            const productoDuplicado = productosCarritoList.findIndex(element => element.id === product.id);
            newList[productoDuplicado].cantidad = newList[productoDuplicado].cantidad + cant;
            newList[productoDuplicado].subTotal = newList[productoDuplicado].cantidad * newList[productoDuplicado].precio;
            setProductoCarritoList(newList)
        } else {
            const newproducto = { ...product, subTotal: cant * product.precio }
            const newList = [...productosCarritoList];
            newList.push(newproducto);
            setProductoCarritoList(newList);
        }

    }

    const eliminarproducto = (idproduct) => {
        const copyArray = [...productosCarritoList];
        const newArray = copyArray.filter(elm => elm.id !== idproduct);
        setProductoCarritoList(newArray)
    }

    const eliminarTodosProductos = () => {
        setProductoCarritoList([])
    }

    const totalCantidadProductos = () => {
        const totalProductosCarrito = productosCarritoList.reduce((acc, item) => acc + item.cantidad, 0);
        return totalProductosCarrito;
    }

    const precioFinalCarrito = () => {
        const precioFinal = productosCarritoList.reduce((acc, item) => acc + item.subTotal, 0);
        return precioFinal;
    }

    return (

        <CartContext.Provider value={{
            productoCarrito: productosCarritoList, anadirProducto, eliminarproducto,
            eliminarTodosProductos, totalCantidadProductos, precioFinalCarrito
        }}>
            {children}
        </CartContext.Provider>

    )
}