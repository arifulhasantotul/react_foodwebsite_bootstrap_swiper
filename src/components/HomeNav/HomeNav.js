import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeNav.css";

const HomeNav = () => {
   return (
      <div className="container-fluid text-center home_nav_menu">
         <h3>Our Menu</h3>
         <NavLink
            className="home_nav_item"
            activeClassName="featured_selected"
            to="/home/breakfast"
         >
            Breakfast
         </NavLink>
         <NavLink
            className="home_nav_item"
            activeClassName="featured_selected"
            to="/home/lunch"
         >
            Lunch
         </NavLink>
         <NavLink
            className="home_nav_item"
            activeClassName="featured_selected"
            to="/home/dinner"
         >
            Dinner
         </NavLink>
      </div>
   );
};

export default HomeNav;
