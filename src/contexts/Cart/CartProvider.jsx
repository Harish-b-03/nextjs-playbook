import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./CartReducer";

export const CartContext = createContext({}); 

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        reducer, 
        {
            isOpen: false,
            items: [],
            totalAmount: 0,
        }
    )
    
    const addItemHandler = (item, quantity = 1) => {
        dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } })
    }

    const toggleCartHandler = () => {
        dispatch({ type: 'TOGGLE_CART' })
    }

    useEffect(() => {
      console.log(state)
    }, [state])
    

    return(
        <CartContext.Provider 
            value={{
                isOpen: state.isOpen,
                items: state.items,
                totalAmount: state.totalAmount,
                addItem: addItemHandler,
                toggleCart: toggleCartHandler
            }}
        >
            {children}
        </CartContext.Provider>
    )
}