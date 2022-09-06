import placaMadre from './imagenes/placaMadre.jpg'
import microprocesadores from './imagenes/microprocesadores.jpg'
import memoriasRam from './imagenes/memoriasRam.jpg'





export const listaProductos = [
    {
        id:1,
        nombre:'Placa Madre',
        precio:'$1000',
        imagen: placaMadre,
        categoria:'placa madre',
        descripcion:'Marca - Gigabyte, Zócalo de CPU - Socket AM4, Dispositivos compatibles - Personal Computer, Tecnología de memoria RAM - DDR4, Procesadores compatibles - AMD A-Series y AMD Athlon, Tipo de set de chips - AMD A320, Velocidad de memoria - 3200 MHz, Plataforma - Windows 8.1, Windows 8 Pro, Windows 8, Windows 10, Series - GA-A320M-S2H, Modelo de CPU - AMD Athlon.'
    },
    {
        id:2,
        nombre:'Microprocesador',
        precio:'$500',
        imagen: microprocesadores,
        categoria:'microprocesador',
        descripcion:'descripcion'
    },
    {
        id:3,
        nombre:'Memoria Ram',
        precio:'$250',
        imagen: memoriasRam,
        categoria:'memoria ram',
        descripcion:'descripcion'
    },
    {
        id:4,
        nombre:'Memoria Ram',
        precio:'$250',
        imagen: microprocesadores,
        categoria:'microprocesador',
        descripcion:'descripcion'
    },
    {
        id:5,
        nombre:'Memoria Ram',
        precio:'$250',
        imagen: placaMadre,
        categoria:'placa madre',
        descripcion:'descripcion'
    },
    {
        id:6,
        nombre:'Memoria Ram',
        precio:'$250',
        imagen: memoriasRam,
        categoria:'memoria ram',
        descripcion:'descripcion'
    },

]


export const cargaProductos = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(listaProductos)
        },2000);
    })
}
