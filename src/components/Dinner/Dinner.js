import React from "react";
import DinnerData from "./DinnerData";
import DinnerMenu from "./DinnerMenu";

const Dinner = () => {
   return (
      <div className="container home_food">
         <div className="row">
            {DinnerData.map((dinner) => (
               <DinnerMenu key={dinner.id} dinner={dinner}></DinnerMenu>
            ))}
         </div>
      </div>
   );
};

export default Dinner;
