import React from "react";
import Header from "../components/Header";
//import Slider from "../components/Slider";
import News from "../components/News";
import Slider2 from "../components/Slider2";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Cash or Trade</title>
      </Helmet>
      <Header />
      <Slider2 />
      <News />
    </>
  );
};

export default Homepage;
