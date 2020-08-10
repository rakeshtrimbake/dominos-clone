import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "../Header/Header.css";
import { Radio, Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <MenuIcon className="header__menu"/>
        <div className="header__image">
          <img className="header__logo" src="./img/dominos_pizza.png" alt="" />
        </div>
        <div className="header_right">
          <Radio checked />
          <span className="header__radio__text">Delivery</span>
          <Radio />
          <span className="header__radio__text">Pick Up/Dine-in</span>
          <Avatar className="header__avatar" src="" />
          <div>
          <span className="header__name">MY ACCOUNT</span>
          <p className="header__button">Login | Signup</p>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <span className="header__nav">BESTSELLER</span>
        <span className="header__nav">VEG PIZZA</span>
        <span className="header__nav">NON-VEG PIZZA</span>
        <span className="header__nav">MEALS & COMBOS</span>
        <span className="header__nav">PIZZA MANIA</span>
        <span className="header__nav">SPECIALITY CHICKEN</span>
        <span className="header__nav">SIDES</span>
        <span className="header__nav">BEVERAGES</span>
        <span className="header__nav">DESSERT</span>
      </div>
      <hr className="header__hr"></hr>
    </div>
  );
}

export default Header;
