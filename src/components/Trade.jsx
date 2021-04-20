import React from "react";
import "../styles/Trade.css";
import Banner from "../img/banner.jpg";
export default function Trade() {
  return (
    <div className="container-fluid">
      <h3>Best Price To Trade</h3>
      <div className="trade-window">
        <div className="trade-1">
          <h2>0.83 %</h2>
          <p>5 Mins</p>
        </div>
        <div className="trade-2">
          <h2>0.83 %</h2>
          <p>1 Hour</p>
        </div>
        <div className="trade-3">
          <h1>₹ 46,62,906</h1>
          <p>Average BTC/INR net price including commission</p>
        </div>
        <div className="trade-4">
          <h2>2.41 %</h2>
          <p>1 Day</p>
        </div>
        <div className="trade-5">
          <h2>10.37 %</h2>
          <p>7 Days</p>
        </div>
      </div>
      <a href="https://finstreet.in/courses">
        <img className="banner" src={Banner} alt="Trade-banner" />
      </a>
    </div>
  );
}
