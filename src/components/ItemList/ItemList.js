import './ItemList.css'
import { Item } from "../Item/Item"
import { useEffect, useState } from 'react'
import {listaProductos} from '../../productos'
import { cargaProductos } from '../../productos'

export function ItemList (){

    const [componentes, setComponentes] = useState([]);

    let err 

    useEffect(()=>{
        const funcionAsincrona = async()=>{
            try{
                const listado = await cargaProductos();
                setComponentes(listado)
            }catch(err){
                err='hubo un error al traer los productos de la base de datos. Error ocurrido en ItemListContainer'
                console.log(err.name)
            }
        }
        funcionAsincrona();
    },[])


    return(

        <div className="article">

        {

           componentes.map((componente)=> {
            return (
                <Item key={componente.id} componente={componente}/>
            )
           })

        }
        </div>

    )
}