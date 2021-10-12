import React from 'react'
import classes from "./HeaderCartButton.module.css"
import {useContext} from "react"
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems=cartCtx.items.reduce((carNumber,item)=>{
        return carNumber+item.amount
    },0 )
    return (
        <button className={classes.button} onClick={props.onShow}>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
