import { Item } from '../item/item';

export const ItemList = ( {catalogoItems} ) => {
    const productosMapped = catalogoItems.map( (item) => <Item item={item} key={item.id}/> )
    return(
        <>
            {productosMapped.length === 0 
            ?   <p className="loader">Cargando <b>:o</b></p>
            :   productosMapped
            }
        </>
    )
}