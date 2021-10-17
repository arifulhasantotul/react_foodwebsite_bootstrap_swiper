import React from "react";
import LunchData from "./LunchData";
import LunchMenu from "./LunchMenu";

const Lunch = () => {
   return (
      <div className="container-fluid home_food">
         <div className="row">
            {LunchData.map((lunch) => (
               <LunchMenu key={lunch.id} lunch={lunch}></LunchMenu>
            ))}
         </div>
      </div>
   );
};

export default Lunch;
