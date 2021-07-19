import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import bin from '../../assets/icons/trash.svg'
import './cart.css'

export const Cart = () => {
  const {cart, clear, removeItem} = useContext(CartContext)
  const [totalCost, setTotalCost] = useState(0)

  const finalizarCompra = () => {
    alert("Muchas gracias por tu compra")
    clear()
  }

  useEffect(() => {
    let newTotal = 0
    if(cart.length > 0) {
      cart.map( item => {
        newTotal += item.subtotal
      })
    }
    setTotalCost(newTotal)
  }, [cart])

  /* prueba de salida de items
  console.log("Cart at miCarrito", cart)
  */  

  return( 
    <>
      <h1>Mi carrito</h1>
      { (cart.length > 0)
        ? ( <div className="conCompra">
              <div className="listaItems-titulos">
                <p>Producto</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
              </div>

              <ul className="listaItems-items">
                {cart.map( item => {
                  return(
                    <div className="listaItems-item" key={item.item.id}>
                      <p>{item.item.title}</p>
                      <p>{item.item.price}</p>
                      <p>{item.quantity}</p>
                      <p>{item.subtotal}</p>
                      <div onClick={() => removeItem(item.item.id)} style={{cursor: "pointer"}}><img src={bin} alt="Eliminar producto" style={{width: "2vw"}}/></div>
                    </div>
                  )
                })}
              </ul>

              <div className="listaItems-total">
                <p>Total: ${totalCost}</p>
              </div>
              <div className="listaItems-buttons">
              <button className="bougthButton" onClick={clear}>Borrar carrito</button>
              <button className="bougthButton" onClick={finalizarCompra}>Finalizar compra</button>
              </div>
            </div> )
        : ( <div className="sinCompra">
            <p>¡Todavía no has agregado items al carrito!</p>
            <Link exact to={'/'} className="bougthButton">Continuar comprando</Link>
          </div> )
      }
    </>
  )
}