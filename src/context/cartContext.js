import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // añade un item al carrito
    const addItem = (item, quantity) => {
        // búsqueda del producto
        const isInCart = cart.find( act => act.item.id === item.id )
        if(!isInCart) {
            // si no está, lo agrego al array
            const newItem = {
                item: {
                    id: item.id,
                    title: item.title,
                    price: item.price
                },
                quantity: quantity
            }
            setCart([...cart, newItem])
        } else {
            // si está, solo le sumo la cantidad
            const existente = cart.map( act => {
                if(act.item.id === item.id) {
                    return{
                        ...act,
                        quantity:  ( parseInt(act.quantity) + parseInt(quantity) )
                    }
                }
                return act
            })
            setCart(existente)
        }
    }

    // borra un único item del carrito
    const removeItem = (itemId) => {
        const newCart = cart.filter( item => item.item.id !== itemId )
        setCart(newCart)
    }

    // borrar todo el carrito
    const clear = () => {
        console.log("Borrando carrito")
        setCart([])
    }
    
    console.log("Cart: ", cart)

    return(
        <CartContext.Provider value={{addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}