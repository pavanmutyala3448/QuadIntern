import React from "react";
import "../styles/Footer.css";
import Pic from "../img/pic.jpg";
export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <a href="https://ftx.com/#a=finstreet">
          <img src={Pic} alt="banner_pic" />
        </a>
        <hr />
        <ul>
          <li>
            <a href="">Copyright © 2019</a>
          </li>
          <li>
            <a href="">HodlInfo.com</a>
          </li>
          <li>
            <a href="">
              Developed By{" "}
              <a href="https://www.quadbtech.com/">
                <span>QuadBTech</span>
              </a>
            </a>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button class="btn">Add Hodlinfo to HomeScreen</button>
      </div>
    </div>
  );
}
