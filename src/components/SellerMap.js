import React from "react";
import Styles from "../styles/eventsocial.module.scss";
import Star from "../images/starfull.svg";
import Staroutline from "../images/staroutline.svg";
const SellerMap = ({ i }) => {
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
            {i.stars.map((star, index) => {
              if (star === 1) {
                return <img src={Star} alt="placeholder" key={index}></img>;
              } else {
                return (
                  <img src={Staroutline} alt="placeholder" key={index}></img>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerMap;
