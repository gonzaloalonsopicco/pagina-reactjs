import './Formulario.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { baseDatos } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export function Formulario() {

    const { productoCarrito, precioFinalCarrito, eliminarTodosProductos } = useContext(CartContext);

    const [userForm, setUserForm] = useState({
        nombre: '',
        celular: '',
        email: ''
    })

    function inputChange(e) {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    }

    const [clienteIds, setUserClienteIds] = useState("")

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
        addDoc(queryref, orden).then(respuesta => setUserClienteIds(respuesta.id));
    }

    const [click, setClick] = useState(false);

    return (
        <div className='formularioDiv'>
            <h2 className='tituloCarrito'>confirmar compra</h2>
            <form className='formularioForm' onSubmit={enviarOrden}>
                <input className='formularioInputs' type="text" placeholder='nombre' name="nombre" onChange={(e) => inputChange(e)}></input>
                <input className='formularioInputs' type="number" placeholder='telefono' name="celular" onChange={(e) => inputChange(e)}></input>
                <input className='formularioInputs' type="email" placeholder='email' name="email" onChange={(e) => inputChange(e)}></input>
                <button className='boton formularioBoton' type='submit' onClick={() => setClick(!click)} disabled={!(userForm.nombre && userForm.celular && userForm.email)}>comfirmar compra</button>
            </form>
            {
                click &&
                <div className='formularioDivExteriorConfirmar'>
                    <div className='FormularioDivInteriorConfirmar'>
                        <p className='FormularioTexto'>gracias por su compra {userForm.nombre} </p>
                        <p className='FormularioTexto'>su id es: {clienteIds} para el seguimiento del pedido</p>
                        <Link to="/" ><button className='boton' onClick={eliminarTodosProductos}>vover al inicio</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}