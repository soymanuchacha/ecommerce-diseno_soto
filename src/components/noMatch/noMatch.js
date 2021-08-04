import { Link } from 'react-router-dom'
// Styles
import monster from '../../assets/icons/monster.png'

export const NoMatch = () => (
    <section className="noMatch">
        <div className="noMatch-img"><img src={monster} alt="mounstruito ilustrado" /></div>
        <div className="noMatch-txt">
            <h1>Un meteorito se estrelló contra esta página</h1>
            <p>No pudimos encontrar la página que estás buscando</p>
            <Link exact to='/' className="primaryButton">Ir al inicio</Link>
        </div>
    </section>
)