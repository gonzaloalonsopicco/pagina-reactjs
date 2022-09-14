import { createContext, useState } from "react";
import { listaProductos } from "../productos";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    //const productosCarritoList = listaProductos;
    const [productosCarritoList, setProductoCarritoList] = useState([]);

    const isInCart = (id)=>{
        const productoExiste = productosCarritoList.some((elemento)=>elemento.id ===id);
        return productoExiste;
    }

    const anadirProducto = (product, cant)=>{
        const newList = [...productosCarritoList];
        
        if(isInCart(product.id)){
            const productoDuplicado = productosCarritoList.findIndex(element=>element.id == product.id);
            newList[productoDuplicado].cantidad = newList[productoDuplicado].cantidad + cant;
            setProductoCarritoList(newList)
        }else{
            const newList =[...productosCarritoList, product];
            setProductoCarritoList(newList);
        }
       
    }

    const eliminarproducto = (idproduct)=>{
        const copyArray = [...productosCarritoList];
        const newArray = copyArray.filter(elm=>elm.id !== idproduct);
        setProductoCarritoList(newArray)
    }

    const eliminarTodosProductos = () =>{
        setProductoCarritoList([])
    }

    return(
        <CartContext.Provider value={{productoCarrito:productosCarritoList, anadirProducto, eliminarproducto, eliminarTodosProductos}}>
            {children}
        </CartContext.Provider>

    )
}