import { useEffect, useState } from "react"
import { ItemDetail } from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
// imagenes
import gorraOrange from '../../assets/images/gorraOrange.jpeg'
import gorraFlores from '../../assets/images/gorraFlores.jpeg'
import fanzineTormenta from '../../assets/images/fanzineTormenta.jpeg'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem]= useState([])
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
    useEffect( () => {
        const getItem = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(productos.filter( (producto) => parseInt(producto.id) === parseInt(id) ))
            }, 2000)
        })
        getItem.then(
            (detalleProd) => {
                setItem(detalleProd[0])    
            },
            (error) => {
                console.log("No encontramos el producto")
            }
        )
    }, [id])
    return(
        <>
            { item === undefined   
                ? <p>Cargando :O</p>
                : <ItemDetail item={item} />
            }
        </>
    )
}