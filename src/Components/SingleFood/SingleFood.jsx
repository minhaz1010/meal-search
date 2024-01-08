import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const item = useLoaderData();
  // console.log(item.meals[0])
  const { strMeal, strMealThumb, strInstructions, strCategory } = item.meals[0];
  return (
    <div className="flex justify-center items-center bg-indigo-100 shadow-xl">
      <div className="card w-2/3 glass">
        <figure>
          <img
            src={strMealThumb}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-bold">{strMeal}</h2>
          <p className="text-2xl">{strInstructions}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
