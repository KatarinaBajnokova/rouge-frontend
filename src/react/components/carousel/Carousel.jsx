import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default CSS
import "@/sass/components/carousel/_carousel.scss"; // Your custom styles

const SimpleCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={false}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
      >
        <div>
          <img src="/images/carousel/carousel1.svg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/carousel/carousel2.svg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/carousel/carousel3.svg" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;
