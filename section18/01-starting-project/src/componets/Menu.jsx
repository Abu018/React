import React, { useContext } from "react";
import ReducerContext from "./ReducerContext.jsx";
export default function Menu({ meal }) {
  const ctx = useContext(ReducerContext);
  function handldeOnClicked() {
    ctx.addItem(meal);
  }
  console.log(ctx);
  return (
    <li className="meals-item">
      <article className="meal-item">
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.image.alt}
          className="meal-image"
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions"></p>
        <button className="button" onClick={handldeOnClicked}>
          Add To Cart
        </button>
      </article>
    </li>
  );
}
