import './ItemList.css'
import { Item } from "../Item/Item"
import {listaProductos} from '../../productos'
import { useEffect, useState } from 'react'


export function ItemList (){

    const [componentes, setComponentes] = useState([]);

    const cargaProductos = ()=>{
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(listaProductos)
            },2000);
        })
    }


    useEffect(()=>{
        const funcionAsincrona = async()=>{
            try{
                const listado = await cargaProductos();
                setComponentes(listado)
            }catch(arror){
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
    },[])


    return(

        <div className="article">

        {
            componentes.length > 0 &&

                <>
                        <Item componente={componentes[0]} />
                        <Item componente={componentes[1]} />
                        <Item componente={componentes[2]} />
                </>

        }
        </div>

    )
}