import React from "react";
import "./Breakfast.css";
import BreakfastData from "./BreakfastData";
import BreakfastMenu from "./BreakfastMenu";

const Breakfast = () => {
   return (
      <div className="container home_food">
         <div className="row">
            {BreakfastData.map((breakfast) => (
               <BreakfastMenu
                  key={breakfast.id}
                  breakfast={breakfast}
               ></BreakfastMenu>
            ))}
         </div>
      </div>
   );
};

export default Breakfast;
