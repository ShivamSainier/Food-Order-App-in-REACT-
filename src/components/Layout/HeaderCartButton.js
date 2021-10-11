import React from 'react'
import classes from "./HeaderCartButton.module.css"

function HeaderCartButton(props) {
    return (
        <button className={classes.button} onClick={props.onShow}>
            <span>Your Cart</span>
            <span className={classes.badge}>5</span>
        </button>
    )
}

export default HeaderCartButton
