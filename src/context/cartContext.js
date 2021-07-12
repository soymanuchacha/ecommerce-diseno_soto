import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // añade un item al carrito
    const addItem = (item) => {
        const check = cart.find( act => act.id === item.id )
        if(check === undefined) {
            setCart([...cart, item])
        } else {
            const addToItem = cart.map( act => {
                if(act.id === item.id) {
                    return{
                        ...act,
                        quantity: ( parseInt(act.quantity) + parseInt(item.quantity) ),
                        subtotal: ( parseInt(act.subtotal) + parseInt(item.subtotal) )
                    }
                }
                return act
            })
            setCart(addToItem)
        }
    }  

    // borra un único item del carrito
    const removeItem = (itemId) => {
        const newCart = cart.filter( item => item.item.id !== itemId)
        setCart(newCart)
    }

    // borrar todo el carrito
    const clear = () => {
        console.log("Borrando carrito")
        setCart([])
    }
    
    console.log(cart)

    return(
        <CartContext.Provider value={{addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

/* al clickear comprar en ItemDetail se debe guardar en el CartContext
   el producto y su cantidad en forma de objeto {item:{}, quantity}
   CartContext debe tener la lógica incorporada de no aceptar duplicados
   ---
   Métodos recomendados: 
   addItem(item, quantity) 
   removeItem(itemId)
   clear()
   isInCart: (id) => true/false
*/ 