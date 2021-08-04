import { useContext } from "react"
import { Link } from "react-router-dom"
// Contexto
import { CartContext } from "../../context/cartContext"
// Styles
import bin from '../../assets/icons/trash.svg'
//import './cart.css'

export const Cart = () => {
  const {cart, clear, removeItem, total} = useContext(CartContext)

  return( 
    <section className="cart">
      <h1>Mi carrito</h1>
      { (cart.length > 0)
        ? ( <div>
              <ul className="cart__titles">
                <li>Producto</li>
                <li>Precio</li>
                <li>Cantidad</li>
                <li>Subtotal</li>
                <li></li>
              </ul>

              <div className="cart__items">
                {cart.map( item => 
                  (
                    <ul className="cart__items-line" key={item.item.id}>
                        <li>{item.item.title}</li>
                        <li>${item.item.price}</li>
                        <li>{item.quantity}</li>
                        <li>${item.subtotal}</li>
                        <li onClick={() => removeItem(item.item.id)} className="cart__items-line-img"><img src={bin} alt="Eliminar producto"/></li>
                    </ul>
                  )
                )}
              </div>

              <ul className="cart__total">
                <li>Total ${total}</li>
              </ul>
              <div className="cart__buttons">
                <button className="secondaryButton" onClick={clear}>Borrar carrito</button>
                <Link to={'/checkout'} className="primaryButton">Finalizar compra</Link>
              </div>
            </div> )
        : ( <div className="noResults">
              <p>¡Todavía no has agregado items al carrito!</p>
              <Link exact to={'/'} className="primaryButton">Continuar comprando</Link>
            </div> )
      }
    </section>
  )
}