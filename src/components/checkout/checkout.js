import { useContext, useState, useEffect, Fragment } from "react";
// Contexto
import { CartContext } from "../../context/cartContext";
import inputs from '../../assets/info/inputs.json'
// Componentes
import { Loading } from "../loader/loader";
import { Form } from "../form/form";
import { OutputOrder } from "../outputOrder/outputOrder";
// Firebase
import { dataBase } from "../../firebase/firebase";

export const Checkout = () => {
    const {cart, total, clear} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState(inputs)
    const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" })
    const [disabled, setDisabled] = useState(true)
    const [orderId, setId] = useState([])

    const onInput = ({target}) => {
       const nextFormData = [...formData]
       const searchIndex = nextFormData.findIndex( obj => obj.name === target.name)
       nextFormData[searchIndex].value = target.value
       setFormData(nextFormData)
       console.log(formData)
    }

    useEffect(() => {
        // validación por campos
        const requiredInputs = formData.filter( ({required}) => required )
        const isEmpty = requiredInputs.some( ({value}) => !value )
        if(isEmpty) {
            setDisabled(true)
        } else {
            const emailInputs = inputs.filter( ({auth}) => auth )
            if(emailInputs[0].value === emailInputs[1].value) {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        }
        // buyer's info
        const nextBuyerData = { ...buyer }
        const searchName = formData.findIndex((obj => obj.name === 'name'))
        const searchPhone = formData.findIndex((obj => obj.name === 'phone'))
        const searchEmail = formData.findIndex((obj => obj.name === 'email'))
        nextBuyerData.name = formData[searchName].value
        nextBuyerData.phone = formData[searchPhone].value
        nextBuyerData.email = formData[searchEmail].value
        setBuyer(nextBuyerData)
    }, [buyer, formData])

    function onSubmit(event) {
        event.preventDefault()

        // mando la orden a la colección
        setLoading(true)
        const db = dataBase
        const orders = db.collection("orders")
        orders.add(newOrder).then( ({id}) => {
            console.log("Orden procesada con éxito")
            setId(id)
        }).catch( error => {
            console.log("Hubo un error", error)
        }).finally( () => {
            setLoading(false)
            clear()
        })
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
        buyer, 
        items, 
    //    date: firebase.firestore.Timestamp.fromDate(new Date()),
        total
    }

    return(
        <Fragment>
            {loading
                ?   <Loading />
                :   ( cart.length > 0
                        ?   (<section className="checkout">
                                <h1>Mi checkout</h1>
                                <div className="checkout-data">
                                    <div className="checkout-data__list">
                                        <h2>Carrito</h2>
                                        <div className="checkout-data__list-body">
                                            { cart.map( item => (<ul className="checkout-data__list-body-line" key={item.item.id}>
                                                <li>{item.quantity}</li>
                                                <li>{item.item.title}</li>
                                                <li>${item.item.price}</li>
                                            </ul>)) }
                                        </div>
                                        <p>Total ${total}</p>
                                    </div>
                                    <Form className="checkout-data__form" disabled={disabled}
                                    inputs={inputs} onInput={onInput} onSubmit={onSubmit} />
                                </div>
                            </section>)
                        :   <OutputOrder orderID={orderId} name={buyer.name} />
                    )
            }
        </Fragment>
    )
}