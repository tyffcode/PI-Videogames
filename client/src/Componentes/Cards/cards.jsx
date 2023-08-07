import Card from "../../Componentes/Card/card";
import "./cards.css";
import { useState } from "react";

function Cards({ countries }) {
  return (
    <div className="card-list">
      {countries?.map(({ id, image, name, continent }) => {
        return (
          <Card
            key={id}
            id={id}
            image={image}
            name={name}
            continent={continent}
          />
        );
      })}
    </div>
  );
}

export default Cards;
