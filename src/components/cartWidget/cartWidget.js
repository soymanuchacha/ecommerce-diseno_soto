import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Contexto
import { CartContext } from '../../context/cartContext';
// Styles
//import './cartWidget.css';
import cart from '../../assets/icons/cart.svg';

export const CartWidget = () => {
    const {cantidadItems} = useContext(CartContext)

    return(
            <nav className="header__nav-icons">
                <Link exact to="/cart">
                    <img src={cart} alt="Mi carrito"/>
                    <span className={cantidadItems > 0 ? "cartItemsNumber" : "hidden-block"}>{cantidadItems}</span>
                </Link>
            </nav>
    )
}