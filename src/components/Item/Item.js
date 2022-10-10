import './Item.css'

export function Item({ componente }) {

    return (

        <>
            <div className="articleDivProductos">
                <h3 className="articleTituloProductos">{componente.nombre} </h3>
                <div className="articleDivFotosProductos">
                    <img src={componente.imagen} alt='' className="articleFotosProductos"></img>
                </div>
                <div className="articleDivBotonPrecio">
                    <p className="articlePrecio">precio</p>
                    <p className="articlePrecio">${componente.precio} </p>
                </div>
            </div>
        </>

    )
}