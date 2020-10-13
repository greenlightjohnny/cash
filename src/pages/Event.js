import React from "react";
import Styles from "../styles/event.module.scss";
import Hero from "../images/hero.png";
import { useLocation } from "react-router-dom";
import EventSocial from "../components/EventSocial";

const Event = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div className={Styles.event}>
        <nav>
          <button></button>
        </nav>
        <div className={Styles.herobg}>
          <img
            src={require(`../images/${location.state.img}.png`)}
            alt="placeholder"
          />
          <div className={Styles.title}>
            <h1>
              Cash<span>or</span>Trade
            </h1>
          </div>
          <div className={Styles.eventInfo}>
            <h2>{location.state.name}</h2>
            <p>{location.state.city}</p>
          </div>
        </div>
      </div>
      <EventSocial />
    </div>
  );
};

export default Event;
