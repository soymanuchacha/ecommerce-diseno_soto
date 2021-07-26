import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Contexto
import { CartContext } from "../../context/cartContext";
// Componentes
import { Loading } from '../loader/loader'
import { ItemCount } from '../itemCount/itemCount'
import './itemDetail.css'

export const ItemDetail = ({item}) => {
    const { addItem } = useContext(CartContext)
    const [cantidadComprada, setCantidadComprada] = useState(0)
    const [precioCompra, setPrecioCompra] = useState(0)
    const [showButtons, setShowButtons] = useState(false)

    const onAdd = (e) => {
        setCantidadComprada(e)
        setPrecioCompra( e * item.item.price )
        // desaparece ItemCount y aparecen botones de acción compra
        setShowButtons(true)
        // cartContext
        addItem(item, e)
    }

    return(
        <>
            {!item
                ?   <Loading />
                :   <div className="itemDetailCard">
                        <div className="itemDetailCard__img"><img src={item.item.pictureUrl} alt={item.item.title}/></div>
                        <div className="itemDetailCard__txt">
                            <h2 className="itemDetailCard__txt-header">{item.item.title}</h2>
                            <p className="itemDetailCard__txt--category">Categoría: {item.item.category}</p>
                            <p className="itemDetailCard__txt--description">{item.item.description}</p>
                            <p className="itemDetailCard__txt--price">Precio ${item.item.price}</p>
                            {/* agregar al carrito: on -> off */}
                            <div className={ showButtons ? "hidden-block" : "itemDetailCard__txt-buy"}>
                                <ItemCount stock={item.item.stock} onAdd={onAdd} />
                                <p className="stockAlert">¡Quedan {item.item.stock} unidades!</p>
                            </div>
                            {/* finalizar compra: off -> on */}
                            <div className={ showButtons ? "itemDetailBought" : "hidden-block"}>
                                <p>Estás comprando {cantidadComprada} {item.item.title} por ${precioCompra}</p>
                                <div className="itemDetailBought-buttons">
                                    <Link exact to={'/'} className="boughtButton">Continuar comprando</Link>
                                    <Link to={'/cart'} className="boughtButton">Terminar mi compra</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}