import { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router'
// Componentes
import { ItemList } from '../itemList/itemList'
import { Loading } from '../loader/loader'
// Firebase
import { dataBase } from '../../firebase/firebase'
// Styles
import bannerFace from '../../assets/icons/bannerFace.svg'
export const ItemListContainer = ({greeting}) => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false) 
    const [catalogoItems, setCatalogoItems] = useState([])
    const [categoryName, setCategoryName] = useState("")

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
                    setCategoryName("artículos de diseño")
                } else {
                    // visualización según categoría
                    const allData = (querySnapshot.docs.map( (doc) => {
                        return {id: doc.id, item: {...doc.data()}} 
                    }))
                    const idCatalogo = allData.filter( (producto) => producto.item.category === id)
                    setCatalogoItems(idCatalogo)
                    setCategoryName(id)
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
        <Fragment>
            <section className="home__hero">
                <img src={bannerFace} alt="Carita feliz ilustrada"/>
                <h1>Hola, este es un {greeting}<br/>de {categoryName}</h1>
            </section>
            <section className="home__products-list">
                { loading 
                    ?   <Loading />
                    :   <div className="flexItem">
                            <ItemList catalogoItems={catalogoItems} />
                        </div>
                }
            </section>
        </Fragment>
    )
}