import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const productos = [
        {id: 1, name: "Pelicula 1 ", descripcion: "Descripcion pelicula A", price: "1000", categoria: "A" },
        {id: 2, name: "Pelicula 2 ", descripcion: "Descripcion pelicula A", price: "2000", categoria: "A" },
        {id: 3, name: "Pelicula 3 ", descripcion: "Descripcion pelicula B", price: "3000", categoria: "B" },
        {id: 4, name: "Pelicula 4 ", descripcion: "Descripcion pelicula B", price: "1000", categoria: "B" },
        {id: 5, name: "Pelicula 5 ", descripcion: "Descripcion pelicula C", price: "2000", categoria: "C" },
        {id: 6, name: "Pelicula 6 ", descripcion: "Descripcion pelicula C", price: "3000", categoria: "C" },
    ]

    const mostrarProductos = new Promise ((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout (() => {
                resolve (productos)
            }, 500)
        } else {
            reject ("No se pueden mostrar los productos")
        }
    }) 
 
    mostrarProductos
    .then ((resultado) => {
        //console.log(resultado)
    })
    .catch ((error) => {
        console.log(error)
    })

    return (
      <>
        <ItemDetail productos={productos}/>
      </>
    )    

}

export default ItemDetailContainer
