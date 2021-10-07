import React from 'react'
import classes from "./MealsSummary.module.css"

function MealsSummery(props) {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food , Delivered to You !</h2>
            <p>
                Choose Your Favorite Meal from your board setion of available meals and enjoy delicious dinner and lunch at home.
            </p>
            <p>
                All our meals are closed with high-quality ingredients , just-in-time and of course by experienced chefs !
            </p>
        </section>
    )
}

export default MealsSummery
