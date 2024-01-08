import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gray-400 flex justify-around">
        <div>
          <Link className="btn btn-ghost text-3xl" to="/home">MealDb</Link>
        </div>
        <div>
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li className="text-xl">
              <Link to="/home" >Home</Link>
            </li>
            <li className="text-xl">
              <Link to="/category">Category</Link>
            </li>
            <li className="text-xl">
              <Link to="/area">Area</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
