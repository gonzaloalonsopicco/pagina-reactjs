import './ItemList.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Item } from "../Item/Item"
import {listaProductos} from '../../productos'
import { cargaProductos } from '../../productos'

export function ItemList (){

    const [componentes, setComponentes] = useState([]);

    const {categorias} = useParams();

    useEffect(() => {
        const funcionAsincrona = async () => {
            try {
                if (categorias === undefined) {
                    setTimeout(() => {
                        setComponentes(listaProductos)
                    console.log(listaProductos)
                    },2000);
                } else {
                    const listado = await cargaProductos();
                    const nuevaLista = await listado.filter(prod => prod.categoria === categorias)
                    setComponentes(nuevaLista)
                    console.log(nuevaLista)
                }
            } catch (err) {
                err = 'hubo un error al traer los productos de la base de datos. Error ocurrido en ItemListContainer'
                console.log(err.name)
            }
        }
        funcionAsincrona();
    }, [categorias])

    


    return(

        <div className="article">

        {
           componentes.map((componente)=> {
            return (
                <Link to={`/item/${componente.id}`} key={componente.id}><Item  componente={componente}/></Link>
                
            )
           })

        }
        </div>

    )
}