import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// Componentes
import { ItemDetail } from "../itemDetail/itemDetail"
import { Loading } from "../loader/loader"
// Firebase
import { dataBase } from "../../firebase/firebase"

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false) 

    useEffect( () => {
        setLoading(true)
        const db = dataBase
        const idItem = db.collection("productos").doc(id)

        idItem.get().then( (doc) => {
            if(doc) {
                console.log("encontré el item")
                setItem( { id: doc.id, item: {...doc.data()} } )
            } else {
                console.log("No existe el item")
                return
            }
        }).catch( (error) => {
            console.log("Hubo un error", error)
        }).finally( () => {
            setLoading(false)
        })
    }, [id])
    console.log("itemDetailContainer item", item)
    
    return(
        <>
            { loading 
                ? <Loading />
                : <ItemDetail item={item} />
            }
        </>
    )
}
/*
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
*/