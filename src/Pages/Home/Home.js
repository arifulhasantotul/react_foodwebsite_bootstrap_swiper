import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Breakfast from "../../components/Breakfast/Breakfast";
import Dinner from "../../components/Dinner/Dinner";
import Lunch from "../../components/Lunch/Lunch";
import HomeSlider from "../../components/SliderInit/HomeSlider";

const Home = () => {
   return (
      <>
         <Router className="container-fluid">
            <HomeSlider></HomeSlider>
            <Switch>
               <Route exact path="/">
                  <Breakfast></Breakfast>
               </Route>
               <Route path="/home/breakfast">
                  <Breakfast></Breakfast>
               </Route>
               <Route path="/home/lunch">
                  <Lunch></Lunch>
               </Route>
               <Route path="/home/dinner">
                  <Dinner></Dinner>
               </Route>
            </Switch>
         </Router>
      </>
   );
};

export default Home;
