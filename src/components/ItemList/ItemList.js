import './ItemList.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Item } from "../Item/Item"
import { baseDatos } from '../../utils/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export function ItemList() {

    const [componentes, setComponentes] = useState([]);

    const { categorias } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                let queryref = ""
                if (!categorias) {
                    queryref = collection(baseDatos, "listaProductos");
                } else {
                    queryref = query(collection(baseDatos, "listaProductos"), where("categoria", "==", categorias))
                }
                const response = await getDocs(queryref);
                const docs = response.docs;
                const data = docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                setComponentes(data);
            } catch (err) {
                err = 'hubo un error al traer los productos de la base de datos. Error ocurrido en ItemListContainer'
            }
        }
        getData()
    }, [categorias])

    return (

        <div className="article">

            {
                componentes.map((componente) => {
                    return (
                        <Link to={`/item/${componente.id}`} key={componente.id}><Item componente={componente} /></Link>

                    )
                })

            }
        </div>

    )
}