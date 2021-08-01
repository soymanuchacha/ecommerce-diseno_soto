// Contexto
import { useContext, useState, Fragment } from "react"
// Contexto
import { CartContext } from "../../context/cartContext"
import inputs from '../../assets/info/inputs.json'
// Componentes
import { Link } from "react-router-dom";
import { Form } from "../form/form"
import { Loading } from "../loader/loader";
// Firebase
import { dataBase } from '../../firebase/firebase'

export const Checkout = () => {
    const {cart, total, clear} = useContext(CartContext)
    const [formData, setFormData] = useState(inputs)
    const [loading, setLoading] = useState(false)

    const onInput = ({target}) => {
        const nextFormData = {...formData, [target.name]: target.value}
        setFormData(nextFormData)
    }

    function onSubmit(event) {
        event.preventDefault()
        // mando la orden a la colección
        setLoading(true)
        const db = dataBase
        const orders = db.collection("orders")
        orders.add(newOrder).then( ({id}) => {
            console.log("Orden procesada con éxito")
            setOrderId(id)
        }).catch( error => {
            console.log("Hubo un error", error)
        }).finally( () => {
            setLoading(false)
            clear()
        })
    }

    const setOrderId = (id) => {
        alert(`Muchas gracias ${formData.name}. Tu orden fue procesada con éxito, es la #${id}`)
    }

    // listo el pedido 
    const items = cart.map(
        ({item}) => ({
            id: item.id,
            title: item.title,
            price: item.price
        })
    )

    // defino la orden
    const newOrder = {
        buyer: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email
        },
        items,
        //date: firebase.firestore.Timestamp.fromDate(new Date()), <- da error
        total
    }

    return(
        <Fragment>
        {loading
            ?   <Loading /> 
            :   ( cart.length > 0
                    ?   (<>        
                            <h1>Mi checkout</h1>
                            <div>
                                <p>Mi compra:</p>
                                <ul>
                                { cart.map( item => (<li key={item.item.id}>{item.quantity} {item.item.title}</li>)) }
                                </ul>
                                <p>Total: ${total}</p>
                            </div>
                            <Form inputs={inputs} onInput={onInput} onSubmit={onSubmit} />
                        </>) 
                    :   <Link exact to='/' className="boughtButton">Volver</Link>
            )
                
        }
        </Fragment>
    )
}

/*
Falta poder agregar el date
Falta modificar el stock de collection productos
Pista: Puedes controlar los stocks con multi-gets utilizando los itemId de tu cart.
*/