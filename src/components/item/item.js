import './item.css';
import { ItemCount } from '../itemCount/itemCount';

export const Item = ( {item} ) => {
    return(
        <div  id={item.id} className="itemCard">
            <img src={item.pictureUrl} alt={item.title}/>
            <h2>{item.title}</h2>
            <p className="itemCard__description">{item.description}</p>
            <p className="price">Precio ${item.price}</p>
            <ItemCount stock={item.stock}/>
        </div>
    )
}