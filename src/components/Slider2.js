import React from "react";
import Slider from "react-slick";
import Styles from "../styles/styles2.module.scss";
import Slideone from "../images/slideone.png";
import Slidetwo from "../images/slidetwo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider2.css";
import { Link } from "react-router-dom";

const Slider2 = () => {
  //   const settings = {
  //     className: "center",
  //     centerMode: true,
  //     infinite: true,
  //     centerPadding: `40px`,
  //     slidesToShow: 1,
  //     speed: 500,
  //     draggable: true,
  //     dots: true,
  //     // dotsClass: "slick-dots slick-thumb",
  //   };

  const settings2 = {
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,

    initialSlide: 0,
    centerPadding: `40px`,
    draggable: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          className: "center",
          slidesToShow: 3,
          centerMode: true,
          infinite: true,
          dots: true,
          centerPadding: `40px`,
          draggable: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          className: "center",
          slidesToShow: 2,
          centerMode: true,
          initialSlide: 2,
          centerPadding: `40px`,
          draggable: true,
          infinite: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 1,
          draggable: true,
          centerPadding: `40px`,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={Styles.slider}>
      <div className={Styles.slidertop}>
        <h4>Happening This Week</h4>

        <div className={Styles.acon}>
          <a href="/">See all</a>
        </div>
      </div>

      <Slider {...settings2}>
        <div className={Styles.maincon}>
          <div className={Styles.slidercon}>
            <img src={Slideone} alt="placeholder" />
            <div className={Styles.info}>
              <h4>Bob Weir and Wolf Bros</h4>
              <p>Fri, Sep 20 • Ventura, CA</p>
              <div className={Styles.infoanchor}>
                <Link
                  to={{
                    pathname: "event/Bob-Weir-and-Wolf-Bros",
                    state: {
                      name: "Bob Weir and Wolf Bros",
                      img: "bob",
                      city: "Fri, Sep 20 • Ventura, CA",
                      band: "bob",
                    },
                  }}
                >
                  20 sellers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.maincon}>
          <div className={Styles.slidercon}>
            <img src={Slidetwo} alt="placeholder" />
            <div className={Styles.info}>
              <h4>The Avett Brothers</h4>
              <p>Fri, Sep 20 • Chicago, IL</p>
              <div className={Styles.infoanchor}>
                <Link
                  to={{
                    pathname: "event/The-Avett-Brothers",
                    state: {
                      name: "The Avett Brothers",
                      img: "avett",
                      city: "Fri, Sep 20 • Chicago, IL",
                      band: "avett",
                    },
                  }}
                >
                  20 sellers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.maincon}>
          <div className={Styles.slidercon}>
            <img src={Slideone} alt="placeholder" />
            <div className={Styles.info}>
              <h4>Bob Weir and Wolf Bros</h4>
              <p>Fri, Sep 20 • Ventura, CA</p>
              <div className={Styles.infoanchor}>
                <Link
                  to={{
                    pathname: "event/Bob-Weir-and-Wolf-Bros",
                    state: {
                      name: "Bob Weir and Wolf Bros",
                      img: "bob",
                      city: "Fri, Sep 20 • Ventura, CA",
                      band: "bob",
                    },
                  }}
                >
                  20 sellers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.maincon}>
          <div className={Styles.slidercon}>
            <img src={Slidetwo} alt="placeholder" />
            <div className={Styles.info}>
              <h4>The Avett Brothers</h4>
              <p>Fri, Sep 20 • Chicago, IL</p>
              <div className={Styles.infoanchor}>
                <Link
                  to={{
                    pathname: "event/The-Avett-Brothers",
                    state: {
                      name: "The Avett Brothers",
                      img: "avett",
                      city: "Fri, Sep 20 • Chicago, IL",
                      band: "avett",
                    },
                  }}
                >
                  20 sellers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.maincon}>
          <div className={Styles.slidercon}>
            <img src={Slideone} alt="placeholder" />
            <div className={Styles.info}>
              <h4>Bob Weir and Wolf Bros</h4>
              <p>Fri, Sep 20 • Ventura, CA</p>
              <div className={Styles.infoanchor}>
                <Link
                  to={{
                    pathname: "event/Bob-Weir-and-Wolf-Bros",
                    state: {
                      name: "Bob Weir and Wolf Bros",
                      img: "bob",
                      city: "Fri, Sep 20 • Ventura, CA",
                      band: "bob",
                    },
                  }}
                >
                  20 sellers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.maincon}>
          <div className={Styles.slidercon}>
            <img src={Slidetwo} alt="placeholder" />
            <div className={Styles.info}>
              <h4>The Avett Brothers</h4>
              <p>Fri, Sep 20 • Chicago, IL</p>
              <div className={Styles.infoanchor}>
                <Link
                  to={{
                    pathname: "event/The-Avett-Brothers",
                    state: {
                      name: "The Avett Brothers",
                      img: "avett",
                      city: "Fri, Sep 20 • Chicago, IL",
                      band: "avett",
                    },
                  }}
                >
                  20 sellers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slider2;
