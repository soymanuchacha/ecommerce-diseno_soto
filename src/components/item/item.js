import './item.css';
import { Link } from 'react-router-dom';

export const Item = ( {item} ) => {
    const {id, title, price, pictureUrl} = item
    return(
        <div id={id} className="itemCard">
            <img src={pictureUrl} alt={title}/>
            <h2>{title}</h2>
            <p className="price">${price}</p>
            <Link className="verItemLink" to={`/item/${id}`}><div className="verItem">Ver producto</div></Link>
        </div>
    )
}