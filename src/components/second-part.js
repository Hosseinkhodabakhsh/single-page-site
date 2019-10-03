import React from "react";
let shaped = require("./assets/images/about-shape-2.png");

class SecondPart extends React.Component {
  render() {
    return (
      <div className="second-container" id="about">
        <div className="about-shape">
          <img src={shaped} alt="hello" class="img-fluid"></img>
        </div>
        <div className="second-container-numberBar-content">
          <div className="numbercontainer inliner">
            <h3>Call us 917-922-0799</h3>
          </div>
        </div>
        <div className="second-container-internal-content">
          <div className="video-content"></div>
          <div className="caption-container">
            <div className="caption-container internal-content">
              <h6>KNOW</h6>
              <h1>About Us</h1>
              <br></br>
              <span className="floatleft"></span>
              <p>
                We are an online real estate website and our mission is to
                change the way homes are sold by bringing down the high costs of
                selling a home and empowering sellers by providing choices. We
                have created “Service Plans” that allow the seller to pay ONLY
                for the services needed. Our goal is to empower our clients with
                options so that they can pick the level of service fits their
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPart;
