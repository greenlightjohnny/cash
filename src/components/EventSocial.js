import React from "react";
import Styles from "../styles/eventsocial.module.scss";
import A1 from "../images/a1.png";
import Star from "../images/starfull.svg";
import Staroutline from "../images/staroutline.svg";
const EventSocial = () => {
  const sellerList = [
    {
      title: "Bob Weir and Wolf Bro's- Pair of GA tickets for Friday 9-20-19",
      avatar: "a1",
      name: "AlTrevison from Ventura, CA",
      stars: 4,
    },

    {
      title:
        "4 Balcony Seats to see Bob Weir and Wolf Bros. at the Majestic Theater",
      avatar: "a2",
      name: "mschafler from Ventura, CA",
      stars: 1,
    },

    {
      title: "1 Ticket Bob Weir and Wolf Bros Ventura Theater Sold out!",
      avatar: "a3",
      name: "BruceNaylor from Ventura, CA",
      stars: 4,
    },

    {
      title: "Bob Weir and Wolf Bro's- Pair of GA tickets for Friday 9-20-19",
      avatar: "a4",
      name: "AlTrevison2 from Ventura, CA",
      stars: 4,
    },
  ];

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
        {sellerList.map((i) => {
          return (
            <div className={Styles.sellerInfo} key={i.name}>
              {" "}
              <div className={Styles.title}>
                <p>{i.title}</p>
              </div>
              <div className={Styles.avatarFlex}>
                <div className={Styles.avatar}>
                  <img
                    src={require(`../images/${i.avatar}.png`)}
                    alt="placeholder"
                  ></img>
                </div>
                <div className={Styles.starsFlex}>
                  <p>{i.name}</p>
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
          );
        })}
      </div>

      <div className={Styles.ticketSellers}>
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
      </div>
    </div>
  );
};

export default EventSocial;
