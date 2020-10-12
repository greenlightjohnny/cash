import React from "react";
//import "../styles/ca.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slideone from "../images/slideone.png";
import Slidetwo from "../images/slidetwo.png";
import "../styles/slider.css";

import Styles from "../styles/slider.module.scss";

const Slider = () => {
  return (
    <div className={Styles.slider}>
      <Carousel>
        <div className={Styles.slidercon}>
          <img src={Slideone} />
          <div className={Styles.info}>
            <p>Test</p>
          </div>
        </div>
        <div className={Styles.slidercon}>
          <img src={Slidetwo} />
          <div className={Styles.info}>
            <p>Test</p>
          </div>
        </div>
        <div className={Styles.slidercon}>
          <img src={Slideone} />
          <div className={Styles.info}>
            <p>Test</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
