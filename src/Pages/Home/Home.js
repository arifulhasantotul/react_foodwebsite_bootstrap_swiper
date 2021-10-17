import React from "react";
import { Container } from "react-bootstrap";
import Breakfast from "../../components/Breakfast/Breakfast";
import Dinner from "../../components/Dinner/Dinner";
import Lunch from "../../components/Lunch/Lunch";
import HomeSlider from "../../components/SliderInit/HomeSlider";

const Home = () => {
   return (
      <Container fluid>
         <HomeSlider></HomeSlider>
         <Breakfast></Breakfast>
         <Lunch></Lunch>
         <Dinner></Dinner>
      </Container>
   );
};

export default Home;
