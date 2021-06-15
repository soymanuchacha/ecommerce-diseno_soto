import logo from './logo.svg';
import cart from './cart.svg';
import search from './search.svg';
import './navBar.css';

export const NavBar = () => {
    return(
        <header>
            <div className="header__logo"><a href="#"><img src={logo} alt="Logo"/></a></div>
            <nav className="header__nav-primary">
                <ul>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <nav className="header__nav-icons">
                <ul>
                    <li><a href="#"><img src={search} alt=""/></a></li>
                    <li><a href="#"><img src={cart} alt=""/></a></li>
                </ul>
            </nav>
        </header>
    )
}