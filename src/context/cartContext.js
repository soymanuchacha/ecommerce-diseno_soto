import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cantidadItems, setCantidadItems] = useState(0)
    const [total, setTotal] = useState(0)

    // añade un item al carrito
    const addItem = (item, quantity) => {
        // búsqueda del producto
        const isInCart = cart.find( act => act.item.id === item.id )
        if(!isInCart) {
            // si no está, lo agrego al array
            const newItem = {
                item: {
                    id: item.id,
                    title: item.item.title,
                    price: item.item.price
                },
                quantity: quantity,
                subtotal: ( quantity * item.item.price )
            }
            setCart([...cart, newItem])
        } else {
            // si está, solo le sumo la cantidad
            const existente = cart.map( act => {
                if(act.item.id === item.id) {
                    return{
                        ...act,
                        quantity:  ( parseInt(act.quantity) + parseInt(quantity) ),
                        subtotal: ( act.subtotal + (parseInt(quantity) * act.item.price) )
                    }
                }
                return act
            })
            setCart(existente)
        }
    }

    // borra un único item del carrito
    const removeItem = (itemId) => {
        console.log("Borrando item")
        const newCart = cart.filter( item => item.item.id !== itemId )
        setCart(newCart)
    }

    // borrar todo el carrito
    const clear = () => {
        console.log("Borrando carrito")
        setCart([])
        setCantidadItems(0)
    }
    
    // Interacción con el ícono carrito
    const cartItemsNumber = () => {
        let totalItems = 0
        if(cart.length > 0) { 
            cart.forEach( (item) => {
                totalItems += item.quantity
            })
            setCantidadItems(totalItems)
        }        
    }

    // Precio total a pagar
    const totalCalc = () => {
        let newTotal = 0
        if(cart.length > 0) {
            cart.map( item => (
                newTotal += item.subtotal
            ))
        }
        setTotal(newTotal)
    }

    useEffect(() => {
        cartItemsNumber()
        totalCalc()
    }, [cart])
    
    return(
        <CartContext.Provider value={{addItem, removeItem, clear, cart, cantidadItems, total}}>
            {children}
        </CartContext.Provider>
    )
}