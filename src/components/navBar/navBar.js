import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// Components
import { CartWidget } from '../cartWidget/cartWidget';
// Styles
import logo from '../../assets/icons/logo.svg';

export const NavBar = () => {
    const categories = ["indumentaria", "impresiones", "cuadros", "sale"]
    const [dropdown, setDropdown] = useState(false)

    const dropdownToggle = () => {
        if(dropdown === false) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    }

    return(
        <header>
            <div className="header__logo">
                <Link exact to={'/'}><img src={logo} alt="Logo"/></Link>
                <p className="header__logo-txt">Hola, soy<br/><span>Manuela Soto</span></p>
            </div>
            <nav className="header__nav">
                <nav className="header__nav-dropdown" onClick={dropdownToggle}>
                    <div className="header__nav-dropdown-btn">
                        <p>Productos</p>
                        <p className="header__nav-dropdown-btnIcon">{dropdown ? "-" : "+"}</p>
                    </div>
                    <ul className={dropdown ? "header__nav-dropdown-content" : "hidden-block"}>
                    {categories.map( (category) => 
                        <NavLink to={`/category/${category}`} activeClassName="activeLink" className="navigation" key={category}><li>{category}</li></NavLink>
                    )}
                    </ul>
                </nav>
                <CartWidget />
            </nav>
        </header>
    )
}