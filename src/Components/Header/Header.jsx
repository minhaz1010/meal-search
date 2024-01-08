import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gray-400 flex justify-around">
        <div>
          <NavLink className="btn btn-ghost text-3xl" to="/home">
            MealDb
          </NavLink>
        </div>
        <div>
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li className="text-xl">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/category">Category</NavLink>
            </li>
            <li className="text-xl">
              <NavLink to="/area">Area</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
