import React from "react";
import TouristInfoCards from "./touristInfoCards/TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./restaurant/Restaurant";

function Admin() {
  return (
    <div>
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
    </div>
  );
}

export default Admin;