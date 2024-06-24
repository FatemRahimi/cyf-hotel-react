import React from "react";
import "./ImgCarouselStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";

function ImgCarousel() {
  return (
    <div className="carousel-container">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={BoraBora} alt="Bora Bora" />
        </div>
        <div>
          <img src={BoraBora2} alt="Bora Bora 2" />
        </div>
        <div>
          <img src={Maldives} alt="Maldives" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
