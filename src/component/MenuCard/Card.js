import React from "react";
import "../MenuCard/Card.css";
import { Button } from "@material-ui/core";
function Card({ image }) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="card">
      <div className="card__img__info" style={style}>
        <h2>Pizza</h2>
      </div>

      <div className="card__info">
        <p>FarmHouse</p>
        <p className="card__description">
          This is delicious thing ever had on a earth and it is nothing but a
          pizza of dominos. Awesome experience very delicious with extra toppin
        </p>
      </div>

      <Button className="card__add">ADD TO CART</Button>
    </div>
  );
}

export default Card;
