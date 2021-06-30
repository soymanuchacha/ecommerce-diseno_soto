import { useEffect, useState } from "react"
import { ItemDetail } from "../itemDetail/itemDetail"
import fanzineTormenta from '../../assets/images/fanzineTormenta.jpeg'

export const ItemDetailContainer = () => {
    const [item, setItem]= useState([])
    const unProducto = {
        id: 1,
        category: "prints",
        title: "Fanzine tormenta",
        description: "Publicación autoproducida de corta tirada de seis hojas y un poster. Impreso en opalina 180gr. Ilustraciones realizadas en Adobe Photoshop en mayo 2018.",
        price: 500,
        stock: 20,
        pictureUrl: fanzineTormenta
    }

    useEffect( () => {
        const getItem = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(unProducto)
            }, 2000)
        })
        getItem.then(
            (unProducto) => {
                setItem(unProducto)
            },
            (error) => {
                console.log("Algo falló")
            }
        )
    }, [])
    return(
        <>
            <ItemDetail item={item} />
        </>
    )
}