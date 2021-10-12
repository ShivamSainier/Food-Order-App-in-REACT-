import React,{useReducer} from 'react'
import CartContext from "./cart-context"

const defaultCartState={
    items:[],
    totalAmount:0
}

function CartProvider(props) {
    
    const cartReducer=(state,action)=>{
        if(action.type=="ADD"){
            const updateItems=state.items.concat(action.item);
            const updatedTotalAmount=state.totalAmount+action.item.price*action.items.amount;
            return{
                items:updateItems,
                totalAmount:updatedTotalAmount
            }
        }
    }
    const addItemToCart=(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    }

    const removeItemfromCart=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})

    }
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCart,
        removeItem:removeItemfromCart,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider
