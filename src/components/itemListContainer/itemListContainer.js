import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'
import { useEffect, useState } from 'react'

export const ItemListContainer = ({greeting}) => {
    const productos = [
        {
            id: 1,
            title: "Gorra orange",
            description: "Bordado a mano. Disponible en amarillo, azul y negro.",
            price: 1500,
            stock: 5,
            pictureUrl: "./gorraOrange.jpeg" /* tampoco entiendo por qué no cargan las imágenes */
        },
        {
            id: 2,
            title: "Gorra flores",
            description: "Bordado a mano. Únicamente disponible en rojo.",
            price: 1800,
            stock: 2,
            pictureUrl: "./gorraFlores.jpeg" 
        },
        {
            id: 3,
            title: "Fanzine tormenta",
            description: "Editorial corto impreso en opalina 180gr.",
            price: 500,
            stock: 20,
            pictureUrl: "./fanzineTormenta.jpeg"
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
                setCatalogoItems(productos)
                console.log(productos)
            },
            (error) => {
                console.log("No pudimos procesar la solicitud")
            }
        )
    }, 
    /* ¿por qué esto siguiente me da un error de dependecias?
    dice que tengo que ponerle [productos] o sacarlo, 
    pero cualquiera de las dos hace que el console.log() sea infinito */
    [])

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