import React from "react";
import { Link } from "react-router-dom";

const CategoryFoods = (props) => {
  // console.log(props);
  return (
    <div className="text-center  mt-5 ">
      <div className="card card-side bg-indigo-200 shadow-xl">
        <figure>
          <img src={props.details.strCategoryThumb} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extralight">
            Category:
            <span className="text-2xl font-bold">
              {props.details.strCategory}
            </span>
          </h2>
          <div className="card-actions ">
            <Link to={`/menu/${props.details.strCategory}`}><button className="btn btn-primary text-lg">Get All Menu</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFoods;
