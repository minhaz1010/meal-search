import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Area = () => {
  const area = useLoaderData();

  console.log(area.meals);
  return (
    <div className="text-center text-3xl grid grid-cols-3 gap-4 container mx-auto">
      {area.meals.map((item) => {
        return (
          <div className="mt-4 mb-4 p-4 bg-indigo-200  rounded-xl">
            <h1 className="mb-3">{item.strArea}</h1>
            <Link to={`/area/${item.strArea}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Area;
