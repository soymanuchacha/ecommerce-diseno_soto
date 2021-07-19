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
        const itemCollection = db.collection("products")
        const product = itemCollection.doc(id)

        product.get().then( (doc) => {
            if(doc) {
                setItem( {id: doc.id, item: {...doc.data()}} )
            } else {
                console.log("No existe el item")
            }
        }).catch( (error) => {
            console.log("Hubo un error", error)
        }).finally( () => {
            setLoading(false)
        })
    }, [id])
    console.log("haber item", item)
    
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
    return(
        <>
            { loading 
                ? <Loading />
                : <ItemDetail item={item} />
            }
        </>
    )
}