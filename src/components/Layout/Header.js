import React from 'react'
import classes from "../Layout/Header.module.css"
import MealImage from "../../assets/meals.jpg"

function Header(props) {
    return (
        <>
            <header className={classes.header}>
            
                <h1>React Meals</h1>
                <button>Cart</button>
               
            </header>
            <div className={classes['main-image']}>
                <img src={MealImage} alt="This is Meal Image"></img>
            </div>
        </>
    )
}

export default Header
