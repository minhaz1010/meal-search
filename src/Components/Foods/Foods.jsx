import React from "react";
import { Link } from "react-router-dom";

const Foods = (props) => {
  // console.log(props);
  const {strMeal,strMealThumb,strCategory,idMeal} = props.food;
  // console.log(idMeal);
  // console.log(strCategory,strMeal);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Foods"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p className="text-lg ">Category: <span className="font-bold">{strCategory}</span></p>
          <div className="card-actions justify-end">
          <Link to={`/food/${idMeal}`} className="btn btn-primary">Details</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
