import './item.css';
import { ItemDetailContainer } from '../itemDetailContainer/itemDetailContainer';

export const Item = ( {item} ) => {
    return(
        <div  id={item.id} className="itemCard">
            <img src={item.pictureUrl} alt={item.title}/>
            <h2>{item.title}</h2>
            <p className="price">${item.price}</p>
            <div className="verItem">Ver producto</div>
        </div>
    )
}