import React from "react";
import Styles from "../styles/header.module.scss";
import Hero from "../images/hero.png";
import Buy from "./Buy";
const Header = () => {
  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.herobg}>
          <img src={Hero} />
          <div className={Styles.title}>
            <h1>
              Cash<span>or</span>Trade
            </h1>
            <p>
              No scalper, no brokers. <br></br>
              Just real people sharing our love for music.
            </p>
            <a href="/">How it works</a>
          </div>
        </div>
      </div>
      <Buy />
    </>
  );
};

export default Header;
