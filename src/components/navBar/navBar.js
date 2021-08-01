import { NavLink, Link } from 'react-router-dom';
// Components
import { CartWidget } from '../cartWidget/cartWidget';
// Styles
import logo from '../../assets/icons/logo.svg';
import './navBar.css';

export const NavBar = () => {
    const categories = ["indumentaria", "impresiones", "cuadros", "sale"]
    return(
        <header>
            <div className="header__logo"><Link exact to={'/'}><img src={logo} alt="Logo"/></Link></div>
            <nav className="header__nav-primary">
                <ul>
                    {categories.map( (category) => 
                        <NavLink to={`/category/${category}`} activeClassName="activeLink" className="navigation" key={category}><li>{category}</li></NavLink>
                    )}
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}