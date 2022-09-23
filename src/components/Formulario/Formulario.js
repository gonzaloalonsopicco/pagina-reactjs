import './Formulario.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { baseDatos } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

export function Formulario() {

    const { productoCarrito, precioFinalCarrito } = useContext(CartContext);

    const enviarOrden = (e) => {
        e.preventDefault();

        const orden = {
            comprador: {
                nombre: e.target[0].value,
                celular: e.target[1].value,
                email: e.target[2].value
            },
            productos: productoCarrito,
            total: precioFinalCarrito(),
        }

        const queryref = collection(baseDatos, "ordenes");
        addDoc(queryref, orden)
        console.log(orden)
    }

    return (
        <div className='formularioDiv'>
            <h2>comfirmar compra</h2>
            <form className='formularioForm' onSubmit={enviarOrden}>
                <input className='formularioInputs' type="text" placeholder='nombre'></input>
                <input className='formularioInputs' type="number" placeholder='telefono'></input>
                <input className='formularioInputs' type="email" placeholder='email'></input>
                <button className='formularioBoton' type='submit'>comfirmar compra</button>
            </form>
        </div>
    )
}