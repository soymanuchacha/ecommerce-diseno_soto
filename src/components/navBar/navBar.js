import logo from './logo.svg';
import './navBar.css';
import { NavLink, Link } from 'react-router-dom';
import {CartWidget} from '../cartWidget/cartWidget';

export const NavBar = () => {
    const categories = ["indumentaria", "prints"]
    return(
        <header>
            <div className="header__logo"><Link exact to={'/'}><img src={logo} alt="Logo"/></Link></div>
            <nav className="header__nav-primary">
                <ul>
                    {categories.map( (category) => 
                        <NavLink to={`/category/${category}`} activeClassName="activeLink" class="navigation" key={category}><li>{category}</li></NavLink>
                    )}
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}