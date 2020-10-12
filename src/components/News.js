import React from "react";
import Styles from "../styles/news.module.scss";
import NewsImage from "../images/news.png";

const News = () => {
  return (
    <div className={Styles.news}>
      <div className={Styles.slidertop}>
        <h4>Recent News</h4>
      </div>
      <div className={Styles.slidercon}>
        <img src={NewsImage} alt="placeholder" />
        <div className={Styles.info}>
          <h4>Join Street Team</h4>
          <p>
            You go to shows every week like it’s your job, so why not make it
            your job? See Free Shows And Help Fans Score For Face.
          </p>
          <div className={Styles.infoanchor}>
            <a href="/">Join now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
