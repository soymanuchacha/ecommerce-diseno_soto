import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
// Contexto
import { CartContext } from '../../context/cartContext'
// Componentes
import { Loading } from '../loader/loader'
import { ItemCount } from "../itemCount/itemCount"
import './itemDetail.css'

export const ItemDetail = ( {item} ) => {
    const {addItem} = useContext(CartContext)
    const [cantidadComprada, setCantidadComprada] = useState(0)
    const [precioCompra, setPrecioCompra] = useState(0)
    const [showButtons, setShowButtons] = useState(false)

    const onAdd = (e) => {
        // almacenar el valor de itemCount en un estado interno de itemDetail para desaparecer itemCount
        setCantidadComprada(e)
        setPrecioCompra( e * item.price )
        // desaparece ItemCount y aparece button terminar compra
        setShowButtons(true)
        // cartContext
        addItem(item, e)
    }

    console.log("pantalla detalle item", item)
    // { id: bla, item: {...}}
    
    return(
        <>
        {!item 
            ?   <Loading />
            :   <div id={item.id} className="itemDetailCard">
                    <div className="itemDetailCard__img"><img src={`../../assets/images/error.jpg`} alt={item.title}/></div>
                    <div className="itemDetailCard__txt">
                        <h2 className="itemDetailCard__txt-header">{item.title}</h2>
                        <p className="itemDetailCard__txt--category">Categoría: {item.category}</p>
                        <p className="itemDetailCard__txt--description">{item.description}</p>
                        <p className="itemDetailCard__txt--price">Precio ${item.price}</p>
                        {/* agregar al carrito: on -> off */}            
                        <div className={ showButtons ? "hidden-block" : "itemDetailCard__txt-buy" }>
                            <ItemCount stock={item.stock} onAdd={onAdd}/>
                            <p className="stockAlert">¡Quedan {item.stock} unidades!</p>
                        </div>
                        {/* finalizar compra: off -> on */}
                        <div className={ showButtons ? "itemDetailBought" : "hidden-block" }>
                            <p>Estás comprando {cantidadComprada} {item.title} por ${precioCompra}</p>
                            <div className="itemDetailBought-buttons">
                                <Link exact to={'/'} className="bougthButton">Continuar comprando</Link>
                                <Link to={'/cart'} className="bougthButton">Terminar mi compra</Link>
                            </div>
                        </div>
                    </div>
                </div> 
        }
        </>
    )
}