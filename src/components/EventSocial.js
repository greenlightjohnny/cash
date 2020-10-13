import React from "react";
import Styles from "../styles/eventsocial.module.scss";
const EventSocial = () => {
  return (
    <div className={Styles.eventSocial}>
      <div className={Styles.buyFind}>
        <div>
          <a href="/">Available Tickets</a>
        </div>
        <div>
          <a href="/">Sell My Tickets</a>
        </div>
      </div>
    </div>
  );
};

export default EventSocial;
