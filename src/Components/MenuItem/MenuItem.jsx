import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  console.log(props.details);
  const {strMeal,strMealThumb,idMeal} = props.details;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Meal"
            className="w-96"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {strMeal}</h2>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
          <Link to={`/food/${idMeal}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
