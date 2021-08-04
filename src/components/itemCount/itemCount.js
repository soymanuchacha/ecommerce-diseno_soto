import { useState } from 'react'
// Styles
//import './itemCount.css'

export const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    // funcionamiento de los botones
    function increment() {
        let newCantidad = parseInt(cantidad) +1
        setCantidad(newCantidad)
    }
    function decrement() {
        let newCantidad = parseInt(cantidad) -1
        setCantidad(newCantidad)
    }
    
    // vista
    return(
        <div className="itemCount">
            <div className="itemCount__input">
                <button className="counterButton"
                onClick={() => decrement()}
                disabled={cantidad<=initial}>-</button>
                <p>{cantidad}</p>
                <button className="counterButton"
                onClick={() => increment()}
                disabled={cantidad>=stock}>+</button>
            </div>
            <button className="primaryButton itemCountButton" type="submit" onClick={() => onAdd(cantidad)} value={cantidad}>Comprar</button>
            <p className="itemCount-stock">¡Quedan {stock} unidades!</p>
        </div>
    )
}