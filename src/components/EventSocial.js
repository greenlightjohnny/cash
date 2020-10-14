import React from "react";
import Styles from "../styles/eventsocial.module.scss";

import MapSellers from "./SellerMap";
const EventSocial = (props) => {
  const sellerList = [
    {
      title: "Bob Weir and Wolf Bro's- Pair of GA tickets for Friday 9-20-19",
      avatar: "a1",
      name: "AlTrevison from Ventura, CA",
      stars: [1, 1, 1, 1, 0],
    },

    {
      title:
        "4 Balcony Seats to see Bob Weir and Wolf Bros. at the Majestic Theater",
      avatar: "a2",
      name: "mschafler from Ventura, CA",
      stars: [1, 0, 0, 0, 0],
    },

    {
      title: "1 Ticket Bob Weir and Wolf Bros Ventura Theater Sold out!",
      avatar: "a3",
      name: "BruceNaylor from Ventura, CA",
      stars: [1, 1, 1, 1, 0],
    },

    {
      title: "Bob Weir and Wolf Bro's- Pair of GA tickets for Friday 9-20-19",
      avatar: "a4",
      name: "AlTrevison2 from Ventura, CA",
      stars: [1, 1, 1, 1, 0],
    },
  ];

  const sellerList2 = [
    {
      title: "The Avett Brothers- Pair of GA tickets for Friday 9-20-19",
      avatar: "a1",
      name: "AlTrevison from Ventura, CA",
      stars: [1, 1, 1, 1, 0],
    },

    {
      title:
        "4 Balcony Seats to see The Avett Brothers. at the Majestic Theater",
      avatar: "a2",
      name: "mschafler from Ventura, CA",
      stars: [1, 0, 0, 0, 0],
    },

    {
      title: "1 Ticket The Avett Brothers Ventura Theater Sold out!",
      avatar: "a3",
      name: "BruceNaylor from Ventura, CA",
      stars: [1, 1, 1, 1, 0],
    },

    {
      title: "The Avett Brothers- Pair of GA tickets for Friday 9-20-19",
      avatar: "a4",
      name: "AlTrevison2 from Ventura, CA",
      stars: [1, 1, 1, 1, 0],
    },
  ];

  let band;
  if (props.band === "bob") {
    band = sellerList;
  } else {
    band = sellerList2;
  }

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
      <div className={Styles.ticketSellers}>
        {band.map((i) => {
          return <MapSellers i={i} key={i.name} />;
        })}
      </div>

      {/* <div className={Styles.ticketSellers}>
        <div className={Styles.sellerInfo}>
          {" "}
          <div className={Styles.title}>
            <p>
              Bob Weir and Wolf Bro's- Pair of GA tickets for Friday 9-20-19
            </p>
          </div>
          <div className={Styles.avatarFlex}>
            <div className={Styles.avatar}>
              <img src={A1} alt="placeholder"></img>
            </div>
            <div className={Styles.starsFlex}>
              <p>AlTrevison from Ventura, CA</p>
              <div className={Styles.stars}>
                <img src={Star} alt="placeholder"></img>
                <img src={Star} alt="placeholder"></img>
                <img src={Star} alt="placeholder"></img>
                <img src={Star} alt="placeholder"></img>
                <img src={Staroutline} alt="placeholder"></img>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EventSocial;
