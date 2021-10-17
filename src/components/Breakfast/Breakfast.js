import React from "react";
import "./Breakfast.css";
import BreakfastData from "./BreakfastData";
import BreakfastMenu from "./BreakfastMenu";

const Breakfast = () => {
   return (
      <div className="container-fluid home_food">
         <div className="row justify-content-center">
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
