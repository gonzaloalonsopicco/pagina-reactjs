import './ItemDetail.css'
import { useEffect, useState } from 'react'
import {listaProductos} from '../../productos'
import { cargaProductos } from '../../productos'



export function ItemDetail(){

    const [cosa, setCosa] = useState({})
    const [loading, setLoading] = useState(true)

    const cargaProductos = ()=>{
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(listaProductos)
            },2000);
        })
    }

    useEffect(()=>{
        cargaProductos
        .then(response =>{
            setCosa(response.find(prod => prod.id === 1))
            setLoading(false)
        })
    },[])




    return(


        <div className="DivItemDetallado">

                <div className='divImagenDetallado'>
                <img src = {cosa.imagen} alt='' className='imagenDetallado'></img>
            </div>
            <div>
                <h2> {cosa.nombre} </h2>
                <div className='precio'>
                <p>precio</p>
                <p>{cosa.precio} </p>
                </div>
                
                <button className='boton'>Agregar</button>
                <p className='descripcion'>descripcion</p>
                <p>Marca - Gigabyte, Zócalo de CPU - Socket AM4, Dispositivos compatibles - Personal Computer, Tecnología de memoria RAM - DDR4, Procesadores compatibles - AMD A-Series y AMD Athlon, Tipo de set de chips - AMD A320, Velocidad de memoria - 3200 MHz, Plataforma - Windows 8.1, Windows 8 Pro, Windows 8, Windows 10, Series - GA-A320M-S2H, Modelo de CPU - AMD Athlon.</p>
            </div>


        </div>

    )
}