import { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({stock, initial}) => {
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
    function gracias() {
        if(cantidad > 0) {
            alert("Gracias por tu compra")
        } else {
            alert("No compraste nada")
        }
    }

    
    // vista
    return(
        <div>
            <div className="formCounter">
                <button className="cantButton"
                onClick={() => decrement()}
                disabled={cantidad<=initial}>-</button>
                <p>{cantidad}</p>
                <button className="cantButton"
                onClick={() => increment()}
                disabled={cantidad>=stock}>+</button>
            </div>
            <button type="submit" onClick={() => gracias()}>Comprar</button>
        </div>
    )
}