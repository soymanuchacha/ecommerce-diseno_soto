export const Cart = () => {
    return( 
        <h1>Mi carrito</h1>
    )
}

/*
- debe mostrar el desglose de tu carrito y el precio total
- debe mostrar todos los items agregados agrupados
- por cada tipo de item incluye un control para eliminar items
- de no haber items muestra un mensaje, de manera codnicional, diciendo que no hay items 
  y un react-router link o un botón para que pueda volver al landing para buscar y comprar algo
- ahora debe consumir el CartContext y mostrar en tiempo real qué cantidad de items están agregados
- el cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas
*/