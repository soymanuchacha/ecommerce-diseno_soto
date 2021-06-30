import './itemDetail.css'
import { ItemCount } from "../itemCount/itemCount"

export const ItemDetail = ( {item} ) => {
    return(
        <div id={item.id} className="itemDetailCard">
                <div className="itemDetailCard__img"><img src={item.pictureUrl} alt={item.title}/></div>
                <div className="itemDetailCard__txt">
                    <h2 className="itemDetailCard__txt-header">{item.title}</h2>
                    <p className="itemDetailCard__txt--category">Categoría: {item.category}</p>
                    <p className="itemDetailCard__txt--description">{item.description}</p>
                    <p className="itemDetailCard__txt--price">Precio ${item.price}</p>
                    <div className="itemDetailCard__txt-buy">
                        <ItemCount stock={item.stock}/>
                        <p className="stockAlert">¡Quedan {item.stock} unidades!</p>
                    </div>
                </div>
        </div>
    )
}