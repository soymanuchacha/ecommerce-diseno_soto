import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// imagenes
import gorraOrange from '../../assets/images/gorraOrange.jpeg'
import gorraFlores from '../../assets/images/gorraFlores.jpeg'
import fanzineTormenta from '../../assets/images/fanzineTormenta.jpeg'

export const ItemListContainer = ({greeting}) => {
    const {id} = useParams()
    const productos = [
        {
            id: 1,
            category: "indumentaria",
            title: "Gorra orange",
            description: "Bordado de manera artesanal. Disponible en amarillo, azul y negro.",
            price: 1500,
            stock: 5,
            pictureUrl: gorraOrange
        },
        {
            id: 2,
            category: "indumentaria",
            title: "Gorra flores",
            description: "Bordada de manera artesanal. Únicamente disponible en rojo.",
            price: 1800,
            stock: 2,
            pictureUrl: gorraFlores 
        },
        {
            id: 3,
            category: "prints",
            title: "Fanzine tormenta",
            description: "Publicación autoproducida de seis hojas y un poster. Impreso en opalina 180gr.",
            price: 500,
            stock: 20,
            pictureUrl: fanzineTormenta
        }
    ]

    const [catalogoItems, setCatalogoItems] = useState([])
    useEffect( () => {
        const solicitud = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(productos)
            }, 2000)
        })
        solicitud.then(
            (productos) => {
                if (!id) {
                    setCatalogoItems(productos)
                } else {
                    const idProductos = productos.filter( (producto) => producto.category === id)
                    setCatalogoItems(idProductos)
                }
            },
            (error) => {
                console.log("No pudimos procesar la solicitud")
            }
        )
    },[id])

    // vista
    return(
        <section>
            <h1>Este es un {greeting}</h1>
            <div className="flexItem">
            <ItemList catalogoItems={catalogoItems} />
            </div>
        </section> 
    )
}