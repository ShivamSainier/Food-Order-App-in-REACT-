import React from 'react'
import classes from "./HeaderCartButton.module.css"

function HeaderCartButton() {
    return (
        <button className={classes.button}>
            <span>Your Cart</span>
            <span className={classes.badge}>5</span>
        </button>
    )
}

export default HeaderCartButton
