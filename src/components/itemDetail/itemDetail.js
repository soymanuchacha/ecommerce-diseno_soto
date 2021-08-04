import { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
// Contexto
import { CartContext } from "../../context/cartContext";
// Componentes
import { Loading } from '../loader/loader'
import { ItemCount } from '../itemCount/itemCount'
// Styles
//import './itemDetail.css'

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
        <Fragment>
            {!item
                ?   <Loading />
                :   <div className="itemDetailCard">
                        <div className="itemDetailCard__img"><img src={item.item.pictureUrl} alt={item.item.title}/></div>
                        <div className="itemDetailCard__txt">
                            <p className="itemDetailCard__txt--category">{item.item.category}</p>
                            <h1 className="itemDetailCard__txt--title">{item.item.title}</h1>
                            <p className="itemDetailCard__txt--price">${item.item.price}</p>
                            <p className="itemDetailCard__txt--description">{item.item.description}.</p>
                            {/* agregar al carrito: on -> off */}
                            <div className={ showButtons ? "hidden-block" : "itemDetailCard__txt--buy"}>
                                <ItemCount stock={item.item.stock} onAdd={onAdd} />
                            </div>
                            {/* finalizar compra: off -> on */}
                            <div className={ showButtons ? "itemDetailCard__txt--bought" : "hidden-block"}>
                                <p>Estás comprando {cantidadComprada} {item.item.title} por ${precioCompra}</p>
                                <div className="itemDetailCard__txt--bought-buttons">
                                    <Link exact to={'/'} className="primaryButton">Continuar comprando</Link>
                                    <Link to={'/cart'} className="secondaryButton">Terminar mi compra</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Fragment>
    )
}