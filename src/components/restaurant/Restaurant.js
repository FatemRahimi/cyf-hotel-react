import React, { useState } from "react";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <h4>Restaurant Orders</h4>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Cakes"} />
      </ul>
    </div>
  );
};
export default Restaurant;