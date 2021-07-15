import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cart from '../../assets/icons/cart.svg';
import { CartContext } from '../../context/cartContext';
import './cartWidget.css';

export const CartWidget = () => {
    const {cantidadItems} = useContext(CartContext)

    return(
            <nav className="header__nav-icons">
                <Link exact to="/cart"><img src={cart} alt="Mi carrito"/></Link>
                <span className={cantidadItems > 0 ? "cartItemsNumber" : "hidden-block"}>{cantidadItems}</span>
            </nav>
    )
}