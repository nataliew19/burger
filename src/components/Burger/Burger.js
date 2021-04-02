import React from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerBuilder type="bread-top" />
            <BurgerBuilder type="cheese" />
            <BurgerBuilder type="meat" />
            <BurgerBuilder type="bread-bottom" />
        </div>
    );
};

export default burger;