import './itemDetail.css'
import { ItemCount } from "../itemCount/itemCount"

export const ItemDetail = ( {item} ) => {
    const {id, title, price, pictureUrl, category, description, stock} = item
    return(
        <div id={id} className="itemDetailCard">
                <div className="itemDetailCard__img"><img src={pictureUrl} alt={title}/></div>
                <div className="itemDetailCard__txt">
                    <h2 className="itemDetailCard__txt-header">{title}</h2>
                    <p className="itemDetailCard__txt--category">Categoría: {category}</p>
                    <p className="itemDetailCard__txt--description">{description}</p>
                    <p className="itemDetailCard__txt--price">Precio ${price}</p>
                    <div className="itemDetailCard__txt-buy">
                        <ItemCount stock={stock}/>
                        <p className="stockAlert">¡Quedan {stock} unidades!</p>
                    </div>
                </div>
        </div>
    )
}