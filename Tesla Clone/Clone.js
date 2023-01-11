import React from "react";
import "./Clone.css";
import Header from "./Header";
import Section from "./section";

function Clone() {
  return (
    <>
      <Header />
      <Section
        backgroundImage = 'model-s.jpg'
        model="Model S"
        text="Shedule a Demo Drive"
        btnLeft="Costom Order"
        btnRight="View Inventory"
        arrow={true}
      />
      <Section
        backgroundImage = 'model-x.jpg'
        model="Model x"
        text="Shedule a Demo Drive"
        btnLeft="Costom Order"
        btnRight="View Inventory"
      />
      <Section
        backgroundImage = 'model-y.jpg'
        model="Model y"
        text="Shedule a Demo Drive"
        btnLeft="Costom Order"
        btnRight="View Inventory"
      />
      <Section
        backgroundImage = 'model-3.jpg'
        model="Model 3"
        text="Shedule a Demo Drive"
        btnLeft="Constom Order"
        btnRight="View Inventory"
      />
      <Section
        backgroundImage = 'solar-panel.jpg'
        model="Solar Panels"
        text="Lowest Cost Solar Panels in India"
        btnLeft="Order Now"
        btnRight="Learn More"
      />

      <Section
        backgroundImage = 'solar-roof.jpg'
        model="Solar Roof"
        text="Produce Clean Energy From Your Roof "
        btnLeft="Order Now"
        btnRight="Learn MOre"
      />

      <Section
        backgroundImage = 'accessories.jpg'
        model="Accessories"
        text="Shedule a Demo Drive"
        btnLeft= "Shop Now"
        
      />
    </>
  );
}

export default Clone;
