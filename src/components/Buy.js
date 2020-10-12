import React, { useState } from "react";
import Styles from "../styles/buy.module.scss";

const Buy = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleClick = () => {
    console.log(searchItem);
    setSearchItem("");
  };
  return (
    <div className={Styles.buy}>
      <div className={Styles.buysell}>
        <a className={Styles.anc} href="/">
          Find Tickets
        </a>
        <a href="/">Sell My Tickets</a>
      </div>
      <div className={Styles.search}>
        <input
          htmlFor="search"
          placeholder="What are you looking for?"
          type="text"
          required
          value={searchItem}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Buy;
