import React from "react";
import "../styles/Navbar.css";
import logo from "../img/logo.png";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://hodlinfo.com/">
          <img src={logo} alt="" />
          <br />
          <p>
            Powered By <a href="https://www.finstreet.in/courses">Finstreet</a>{" "}
          </p>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn  toggle">INR</button>
            </li>
            <li className="nav-item">
              <button className="btn  toggle">BTC</button>
            </li>
            <li className="nav-item">
              <button className="btn toggle-btn">BUY BTC</button>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary connect-btn">
          <img
            src="https://image.flaticon.com/icons/png/512/739/739158.png"
            alt=""
          />
          CONNECT TELEGRAM
        </button>
        {/* <div className="switch">
          <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </label>
        </div> */}
      </div>
    </nav>
  );
}
