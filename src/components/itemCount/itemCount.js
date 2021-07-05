import { useState } from 'react'
import './itemCount.css'

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
    /*
    function gracias() {
        if(cantidad > 0) {
            alert("Gracias por tu compra")
        } else {
            alert("No compraste nada")
        }
        onAdd()
    }
    */

    
    // vista
    return(
        <div>
            <div className="formCounter">
                <button className="cantButton"
                onClick={() => decrement()}
                disabled={cantidad<=initial}>-</button>
                <p className="counterP">{cantidad}</p>
                <button className="cantButton"
                onClick={() => increment()}
                disabled={cantidad>=stock}>+</button>
            </div>
            <button type="submit" onClick={onAdd} value={cantidad}>Comprar</button>
        </div>
    )
}