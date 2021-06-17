import logo from './logo.svg';
import './navBar.css';
import {CartWidget} from '../cartWidget/cartWidget';

export const NavBar = () => {
    return(
        <header>
            <div className="header__logo"><img src={logo} alt="Logo"/></div>
            <nav className="header__nav-primary">
                <ul>
                    <li>Tienda</li>
                    <li>FAQ</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}