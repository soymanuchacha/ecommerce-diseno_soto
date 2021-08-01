import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router";
// Componentes
import { ItemDetail } from "../itemDetail/itemDetail"
import { Loading } from "../loader/loader";
// Firebase
import { dataBase } from '../../firebase/firebase'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        const db = dataBase
        const itemCollection = db.collection("productos")
        const producto = itemCollection.doc(id)

        producto.get().then( (doc) => {
            if(!doc.exists) {
                console.log("No existe el item")
                return
            }
            setItem( {id: doc.id, item: {...doc.data()}} )
        }).catch( (error) => {
            console.log("Hubo un error", error)
        }).finally( () => {
            setLoading(false)
        })
    }, [id])

    return(
        <Fragment>
            {loading
                ?   <Loading />
                :   <ItemDetail item={item} key={item.id} />
            }
        </Fragment>
    )
}