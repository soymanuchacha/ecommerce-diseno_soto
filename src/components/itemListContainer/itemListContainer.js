import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// Componentes
import { ItemList } from '../itemList/itemList'
import { Loading } from '../loader/loader'
import './itemListContainer.css'
// Firebase
import { dataBase } from '../../firebase/firebase'

export const ItemListContainer = ({greeting}) => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false) 
    const [catalogoItems, setCatalogoItems] = useState([])

    useEffect( () => {
        setLoading(true)
        const db = dataBase
        const itemCollection = db.collection("productos")

        itemCollection.get().then( (querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log("No hay productos disponibles :(")
            } else {
                if(!id) {
                    // visualización de todos los productos
                    setCatalogoItems(querySnapshot.docs.map( (doc) => {
                        return {id: doc.id, item: {...doc.data()}}
                    }))
                } else {
                    // visualización según categoría
                    const allData = (querySnapshot.docs.map( (doc) => {
                        return {id: doc.id, item: {...doc.data()}} 
                    }))
                    const idCatalogo = allData.filter( (producto) => producto.item.category === id)
                    setCatalogoItems(idCatalogo)
                }
            }
        }).catch( (error) => {
            console.log("Hubo un error", error)
        }).finally( () => {
            setLoading(false)
        })
    }, [id])
    
    // vista
    return(
        <section>
            <h1>Este es un {greeting}</h1>
            { loading 
                ?   <Loading />
                :   <div className="flexItem">
                        <ItemList catalogoItems={catalogoItems} />
                    </div>
            }
        </section> 
    )
}