import { Fragment } from 'react';
import { Link } from "react-router-dom";
// Componentes
import { Item } from '../item/item';

export const ItemList = ( {catalogoItems} ) => {
    const productosMapped = catalogoItems.map( (item) => <Item item={item} key={item.id}/> )
    return(
        <Fragment>
            {productosMapped.length === 0 
            ?   <div className="noResults">
                    <p>Lo sentimos, no hay productos disponibles en esta categoría</p>
                    <Link exact to={'/'} className="primaryButton">Ir al inicio</Link>
                </div>
            :   productosMapped
            }
        </Fragment>
    )
}