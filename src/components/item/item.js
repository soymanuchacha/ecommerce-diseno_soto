import { Link } from 'react-router-dom';
// Styles
import './item.css';

export const Item = ( {item} ) => {
    return(
        <div id={item.id} className="itemCard">
            <img src={item.item.pictureUrl} alt={item.item.title}/>
            <h2>{item.item.title}</h2>
            <p className="price">${item.item.price}</p>
            <Link className="verItemLink" to={`/item/${item.id}`}><div className="verItem">Ver producto</div></Link>
        </div>
    )
}