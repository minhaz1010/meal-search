import React from "react";
import { Link } from "react-router-dom";

const CCountryItem = (props) => {
  console.log(props.details);
  const { strMeal, strMealThumb, idMeal } = props.details;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="Meal" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-end">
            <Link to={`/food/${idMeal}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCountryItem;
