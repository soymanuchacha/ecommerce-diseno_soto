import { useContext, Fragment } from "react"
import { Link } from "react-router-dom"
// Contexto
import { CartContext } from "../../context/cartContext"
// Styles
import bin from '../../assets/icons/trash.svg'
import './cart.css'

export const Cart = () => {
  const {cart, clear, removeItem, total} = useContext(CartContext)

  return( 
    <Fragment>
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
                {cart.map( item => 
                  (
                    <div className="listaItems-item" key={item.item.id}>
                      <p>{item.item.title}</p>
                      <p>{item.item.price}</p>
                      <p>{item.quantity}</p>
                      <p>{item.subtotal}</p>
                      <div onClick={() => removeItem(item.item.id)} style={{cursor: "pointer"}}><img src={bin} alt="Eliminar producto" style={{width: "2vw"}}/></div>
                    </div>
                  )
                )}
              </ul>

              <div className="listaItems-total">
                <p>Total: ${total}</p>
              </div>
              <div className="listaItems-buttons">
                <button className="bougthButton" onClick={clear}>Borrar carrito</button>
                <Link to={'/checkout'} className="bougthLink">Finalizar compra</Link>
              </div>
            </div> )
        : ( <div className="sinCompra">
              <p>¡Todavía no has agregado items al carrito!</p>
              <Link exact to={'/'} className="bougthLink">Continuar comprando</Link>
            </div> )
      }
    </Fragment>
  )
}