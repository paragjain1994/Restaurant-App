import React, { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
      <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImg} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
