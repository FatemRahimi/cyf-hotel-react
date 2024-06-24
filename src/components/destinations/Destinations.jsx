import React from "react";
import "./DestinationsStyles.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="img-container">
          <img
            className="span-3 image-grid-row-2"
            src={BoraBora}
            alt="Bora Bora"
          />
          <img src={BoraBora2} alt="Bora Bora 2" />
          <img src={Maldives} alt="Maldives" />
          <img src={Maldives2} alt="Maldives 2" />
          <img src={KeyWest} alt="Key West" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
