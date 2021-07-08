import './itemDetail.css'
import { useState } from 'react'
import { ItemCount } from "../itemCount/itemCount"
import { Link } from 'react-router-dom'

export const ItemDetail = ( {item} ) => {
    const {id, title, price, pictureUrl, category, description, stock} = item
    const [cantidadComprada, setCantidadComprada] = useState(0)
    const [precioCompra, setPrecioCompra] = useState(0)

    const onAdd = (e) => {
        // almacenar el valor de itemCount en un estado interno de itemDetail para desaparecer itemCount
        setCantidadComprada(e)
        setPrecioCompra( (e)*price )
        // desaparece ItemCount y aparece button terminar compra
        document.getElementById("itemDetailBuying").style.display="none"
        document.getElementById("itemDetailBought").style.display="block"
    }
    
    return(
        <div id={id} className="itemDetailCard">
                <div className="itemDetailCard__img"><img src={pictureUrl} alt={title}/></div>
                <div className="itemDetailCard__txt">
                    <h2 className="itemDetailCard__txt-header">{title}</h2>
                    <p className="itemDetailCard__txt--category">Categoría: {category}</p>
                    <p className="itemDetailCard__txt--description">{description}</p>
                    <p className="itemDetailCard__txt--price">Precio ${price}</p>
                    <div id="itemDetailBuying" className="itemDetailCard__txt-buy">
                        <ItemCount stock={stock} onAdd={onAdd}/>
                        <p className="stockAlert">¡Quedan {stock} unidades!</p>
                    </div>
                    {/* botón que tiene que estar oculto y llevar al path '/cart' */}
                    <div id="itemDetailBought" style={{display: "none"}}>
                    <p>Estás comprando {cantidadComprada} {title} por ${precioCompra}</p>
                    <Link to={'/cart'}><button id="bought">Terminar mi compra</button></Link>
                    </div>
                </div>
        </div>
    )
}