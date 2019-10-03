import React from "react";
let imageName = require("./assets/images/footer-logo.svg");

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="internal-grid">
                <img src={imageName} alt="logo" class="img-fluid"></img>
              </div>
            </div>
            <div className="second-grid">
              <h3>Home</h3>
              <ul>
                <li>
                  <a href="#home">Process</a>
                </li>
                <li>
                  <a href="#home">Services</a>
                </li>
                <li>
                  <a href="#home">Calculate</a>
                </li>
                <li>
                  <a href="#home">Compare</a>
                </li>
                <li>
                  <a href="#home">Feedbacks</a>
                </li>
              </ul>
            </div>
            <div className="second-grid">
              <h3>Sitemap</h3>
              <ul>
                <li>
                  <a href="#home">About</a>
                </li>
                <li>
                  <a href="#home">What we do</a>
                </li>
                <li>
                  <a href="#home">Projection</a>
                </li>
                <li>
                  <a href="#home">Location</a>
                </li>
                <li>
                  <a href="#home">Purchase</a>
                </li>
              </ul>
            </div>
            <div className="second-grid">
              <h3>Discover</h3>
              <ul>
                <li>
                  <a href="#home">Privacy Policy</a>
                </li>
                <li>
                  <a href="#home">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#home">Owner Portal</a>
                </li>
                <li>
                  <a href="#home">Houses</a>
                </li>
              </ul>
            </div>
            <div className="second-grid">
              <h3>Subscribe</h3>
              <input
                type="email"
                required
                className="footer-text-box"
                placeholder="Enter Your Email..."
              />
              <input
                type="submit"
                required
                className="footer-button-box"
                value="submit"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
