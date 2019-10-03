import React from "react";
let imageName = require("./assets/images/logo.svg");

class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="container">
          <div className="firstnav">
            <ul className="floatleft firstnav-logo">
              <li>
                <a href="www.google.com">
                  <img src={imageName} alt="imagelogo" />
                </a>
              </li>
            </ul>
            <ul className="floatright">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a class="#Service" href="#service">
                  Services
                </a>
              </li>
              <li>
                <a href="#compare">Compare</a>
              </li>
              <li>
                <a href="checkout.html">Purchase</a>
              </li>
              <li>
                <a href="#calculate">Calculate</a>
              </li>
              <li>
                <a href="#contact">Contact </a>
              </li>
            </ul>
          </div>
          <div className="floatleft inside-header-content">
            <div className="leftborder">
              <div>
                <h1>Save Thousands Selling Your Home</h1>
              </div>
            </div>
            <p>
              You are provided the education, resources and <br />
              tools necessary to get your home listed on the <br />
              Multiple Listing Service.
            </p>
            <div className="firstbutton">
              <input
                type="submit"
                required
                className="button-box"
                value="Get Listed Now..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
