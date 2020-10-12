import React from "react";
import Styles from "../styles/buy.module.scss";

const Buy = () => {
  const handleChange = () => {};

  const handleClick = () => {};
  return (
    <div className={Styles.buy}>
      <div className={Styles.buysell}>
        <a href="/">Find Tickets</a>
        <a href="/">Sell My Tickets</a>
      </div>
      <div className={Styles.search}>
        <input
          htmlFor="search"
          placeholder="What are you looking for?"
          type="text"
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Buy;
