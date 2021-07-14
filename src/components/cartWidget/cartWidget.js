import cart from '../../assets/icons/cart.svg';
// import search from './search.svg';
import './cartWidget.css';

export const CartWidget = () => {
    return(
            <nav className="header__nav-icons">
                <ul>
                    {/*<li><img src={search} alt="Buscar"/></li>*/}
                    <li><img src={cart} alt="Mi carrito"/></li>
                </ul>
            </nav>
    )
}