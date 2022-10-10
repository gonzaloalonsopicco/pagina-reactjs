import './ItemDetail.css'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Contador } from '../Contador/Contador'
import { CartContext } from '../../context/CartContext'
import { doc, getDoc } from 'firebase/firestore'
import { baseDatos } from '../../utils/firebase';

export function ItemDetail() {

    // carga de producto detallado

    const [compo, setCompo] = useState({})

    const [cantid, setCantida] = useState(0)

    const { ids } = useParams()

    useEffect(() => {
        const queryref = doc(baseDatos, "listaProductos", ids)
        getDoc(queryref).then(response => {
            const newdoc = {
                ...response.data(),
                id: response.id
            }
            setCompo(newdoc)
        })
    }, [])

    //contador 

    const { anadirProducto } = useContext(CartContext);

    const agregarCarrito = (contador) => {
        const newproducto = { ...compo, cantidad: contador };
        anadirProducto(newproducto, contador);
        setCantida(contador);
    }

    return (

        <>
            <div className="DivItemDetallado">

                <div className='divImagenDetallado'>
                    <img src={compo.imagen} alt='' className='imagenDetallado'></img>
                </div>
                <div>
                    <h2 className='titiloProductoDetallado'> {compo.nombre} </h2>
                    <div className='divPrecioDetallado'>
                        <p className='precioDetallado'>precio:</p>
                        <p className='precioDetallado'> ${compo.precio} </p>
                    </div>
                    <Contador stock={10} inicial={1} agregarCarrito={agregarCarrito} />
                    {
                        cantid > 0 &&
                        <Link to={"/carrito"}><button className='boton'>ir al carrito</button></Link>
                    }
                </div>
            </div>
            <p className='tituloDescripcionDetallado'>descripción</p>
            <p className='textoDescripcionDetallado'>{compo.descripcion} </p>
        </>
    )
}