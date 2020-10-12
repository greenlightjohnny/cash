import React from "react";
//import "../styles/ca.module.scss";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slideone from "../images/slideone.png";
import Slidetwo from "../images/slidetwo.png";
//import "../styles/slider.css";
import "../styles/ca.css";
import Styles from "../styles/slider.module.scss";

const Slider = () => {
  return (
    <div className={Styles.slider}>
      <div className={Styles.slidertop}>
        <h4>Happening This Week</h4>

        <div className={Styles.acon}>
          <a href="/">See all</a>
        </div>
      </div>
      <Carousel>
        <div className={Styles.slidercon}>
          <img src={Slideone} />
          <div className={Styles.info}>
            <h4>Bob Weir and Wolf Bros</h4>
            <p>Fri, Sep 20 • Ventura, CA</p>
            <div className={Styles.infoanchor}>
              <a href="/">20 sellers</a>
            </div>
          </div>
        </div>
        <div className={Styles.slidercon}>
          <img src={Slidetwo} />
          <div className={Styles.info}>
            <h4>The Avett Brothers</h4>
            <p>Fri, Sep 20 • Chicago, IL</p>
            <div className={Styles.infoanchor}>
              <a href="/">10 sellers</a>
            </div>
          </div>
        </div>
        <div className={Styles.slidercon}>
          <img src={Slideone} />
          <div className={Styles.info}>
            <h4>Bob Weir and Wolf Bros</h4>
            <p>Fri, Sep 20 • Ventura, CA</p>
            <div className={Styles.infoanchor}>
              <a href="/">20 sellers</a>
            </div>
          </div>
        </div>
        <div className={Styles.slidercon}>
          <img src={Slidetwo} />
          <div className={Styles.info}>
            <h4>The Avett Brothers</h4>
            <p>Fri, Sep 20 • Chicago, IL</p>
            <div className={Styles.infoanchor}>
              <a href="/">10 sellers</a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
