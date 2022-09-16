import './ItemDetail.css'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { listaProductos } from '../../productos'
import { cargaProductos } from '../../productos'
import { Contador } from '../Contador/Contador'
import { CartContext } from '../../context/CartContext'



export function ItemDetail() {

    // carga de producto detallado

    const [compo, setCompo] = useState({})
    const [cantid, setCantida] = useState(0)

    const { ids } = useParams()

    useEffect(() => {
        const funcionAsincronaa = async () => {
            try {
                const producto = await cargaProductos()
                const productoDtallado = await producto.find(prod => prod.id == ids)
                setCompo(productoDtallado)

            } catch (err) {
                err = 'hubo un error al traer los productos de la base de datos. Error ocurrido en ItemListContainer'
                console.log(err.name)
            }
        }
        funcionAsincronaa();
    }, [])

    //contador 

    const { anadirProducto } = useContext(CartContext);

    const agregarCarrito = (contador) => {
        const newproducto = { ...compo, cantidad: contador };
        anadirProducto(newproducto, contador);
        setCantida(contador);
    }

    return (

        <div className="DivItemDetallado">

            <div className='divImagenDetallado'>
                <img src={compo.imagen} alt='' className='imagenDetallado'></img>
            </div>
            <div>
                <h2> {compo.nombre} </h2>
                <div className='precio'>
                    <p>precio</p>
                    <p>{compo.precio} </p>
                </div>
                <Contador stock={10} inicial={1} agregarCarrito={agregarCarrito} />
                {
                    cantid > 0 &&
                    <Link to={"/carrito"}><button className='boton'>finalizar compra</button></Link>
                }
                <p className='descripcion'>descripcion</p>
                <p>{compo.descripcion} </p>
            </div>

        </div>

    )
}