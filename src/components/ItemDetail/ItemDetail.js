import './ItemDetail.css'
import { useEffect, useState } from 'react'
import {listaProductos} from '../../productos'
import { cargaProductos } from '../../productos'
import { useParams } from 'react-router-dom'



export function ItemDetail(){

    const [compo, setCompo] = useState({})

    const {ids} = useParams()
    
    useEffect(()=>{
        const funcionAsincronaa = async()=>{
            try{
                const producto = await cargaProductos()
                const productoDtallado = await producto.find(prod => prod.id == ids)
                setCompo(productoDtallado)
                
            }catch(err){
                err='hubo un error al traer los productos de la base de datos. Error ocurrido en ItemListContainer'
                console.log(err.name)
            }
        }
        funcionAsincronaa();
    },[])

    return(

        <div className="DivItemDetallado">

                <div className='divImagenDetallado'>
                <img src = {compo.imagen} alt='' className='imagenDetallado'></img>
            </div>
            <div>
                <h2> {compo.nombre} </h2>
                <div className='precio'>
                <p>precio</p>
                <p>{compo.precio} </p>
                </div>
                
                <button className='boton'>Agregar</button>
                <p className='descripcion'>descripcion</p>
                <p>{compo.descripcion} </p>
            </div>

        </div>

    )
}