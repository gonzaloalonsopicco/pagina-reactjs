import './Item.css'




export function Item ({componente}){

    return (

        <>
            <div className="articleDivProductos">
                <h3 className="articleTituloProductos">{componente.nombre} </h3>
                <div className="articleDivFotosProductos">
                    <img src={componente.imagen} className="articleFotosProductos"></img>
                </div>
                <div className="articleDivBotonPrecio">
                    <button id="" className="btn btn-primary articleBotonCarrito">Agregar</button>
                    <button id="" className="btn btn-primary articleBotonCarrito">ver mas</button>
                    <p className="articlePrecio">{componente.precio} </p>
                </div>
            </div>
        </>

    )
}