import { Link } from "react-router-dom"
import bannerFace from '../../assets/icons/bannerFace.svg'

export const OutputOrder = ({orderID, name}) => (
    <section className="outputOrder">
        <div className="outputOrder__card">
            <img src={bannerFace} alt="Carita feliz ilustrada" />
            <h1>¡Muchas gracias {name}<br/>por tu compra!</h1>
            <p>Tu número de pedido es:<br/>#{orderID}</p>
            <Link exact to='/' className="primaryButton orderButton">Volver al inicio</Link>
        </div>
    </section>
)