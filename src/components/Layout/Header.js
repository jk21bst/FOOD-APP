import { Fragment } from "react";
import mealsImage from './../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
return (
<Fragment>
    <header className={classes.header}>
        <h1 className={classes.h1}>ReactMeals</h1>
      <HeaderCartButton onClickk={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food"/>
    </div>
</Fragment>
)};
export default Header;