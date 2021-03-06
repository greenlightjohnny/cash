import React from "react";
import Styles from "../styles/event.module.scss";

import { useLocation } from "react-router-dom";
import EventSocial from "../components/EventSocial";
import { Helmet } from "react-helmet";

const Event = (props) => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Cash or Trade | {location.state.name}</title>
      </Helmet>
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
      <EventSocial band={location.state.band} />
    </>
  );
};

export default Event;
