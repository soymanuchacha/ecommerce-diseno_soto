import './itemDetail.css'
import { useState, useContext } from 'react'
import { ItemCount } from "../itemCount/itemCount"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

export const ItemDetail = ( {item} ) => {
    const {id, title, price, pictureUrl, category, description, stock} = item
    const [cantidadComprada, setCantidadComprada] = useState(0)
    const [precioCompra, setPrecioCompra] = useState(0)
    const {addItem} = useContext(CartContext)
    const [showButtons, setShowButtons] = useState(false)

    const onAdd = (e) => {
        // almacenar el valor de itemCount en un estado interno de itemDetail para desaparecer itemCount
        setCantidadComprada(e)
        setPrecioCompra( (e)*price )
        // desaparece ItemCount y aparece button terminar compra
        setShowButtons(true)
        // cartContext
        addItem(item ,e)
    }
    
    return(
        <div id={id} className="itemDetailCard">
            <div className="itemDetailCard__img"><img src={pictureUrl} alt={title}/></div>
            <div className="itemDetailCard__txt">
                <h2 className="itemDetailCard__txt-header">{title}</h2>
                <p className="itemDetailCard__txt--category">Categoría: {category}</p>
                <p className="itemDetailCard__txt--description">{description}</p>
                <p className="itemDetailCard__txt--price">Precio ${price}</p>
                <div className={ showButtons ? "hidden-block" : "itemDetailCard__txt-buy" }>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                    <p className="stockAlert">¡Quedan {stock} unidades!</p>
                </div>
                {/* botones ocultos hasta hacer la compra */}
                <div className={ showButtons ? "itemDetailBought" : "hidden-block" }>
                    <p>Estás comprando {cantidadComprada} {title} por ${precioCompra}</p>
                    <div className="itemDetailBought-buttons">
                        <Link exact to={'/'} className="bougthButton">Continuar comprando</Link>
                        <Link to={'/cart'} className="bougthButton">Terminar mi compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}