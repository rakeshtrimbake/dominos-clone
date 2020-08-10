import React from "react";
import "../MenuCard/MenuCard.css";
import Card from '../MenuCard/Card';
function MenuCard({title}) {
  return (
    <div className="menucard">
      
  <span className="menucard__text">{title}</span>
      <div className="cards">
          <Card image="./img/pizza2.jpg"/>
          <Card image="./img/pizza1.jpg"/>
          <Card image="./img/pizza3.jpg"/>
          <Card image="./img/pizza5.jpg"/>
          <Card image="./img/pizza5.jpg"/>

      </div>
    </div>
  );
}

export default MenuCard;
