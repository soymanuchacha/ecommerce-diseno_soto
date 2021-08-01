import { Fragment } from 'react';
// Componentes
import { Item } from '../item/item';

export const ItemList = ( {catalogoItems} ) => {
    const productosMapped = catalogoItems.map( (item) => <Item item={item} key={item.id}/> )
    return(
        <Fragment>
            {productosMapped.length === 0 
            ?   <p className="noCategoryResults">No hay productos disponibles para esta categoría por el momento</p>
            :   productosMapped
            }
        </Fragment>
    )
}