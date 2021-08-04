import { Link } from 'react-router-dom';
// Styles
//import './item.css';

export const Item = ( {item} ) => {
    return(
        <div id={item.id} className="itemCard">
            <Link to={`/item/${item.id}`} className="itemCard__img--link-color">
                <div className="itemCard__img">
                    <p>Ver producto</p>
                    <img src={item.item.pictureUrl} alt={item.item.title}/>
                </div>
                <div className="itemCard__txt">
                    <h2>{item.item.title}</h2>
                    <p className="itemCard__txt--price">${item.item.price}</p>
                </div>
            </Link>
        </div>
    )
}