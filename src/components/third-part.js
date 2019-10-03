import React from "react";

let shape1 = require("./assets/images/pr-icon.svg");
let shape2 = require("./assets/images/pr-icon-1.svg");
let shape3 = require("./assets/images/pr-icon-2.svg");
let shape4 = require("./assets/images/shape-1.svg");
let shape5 = require("./assets/images/blue-shape.svg");
class thirdPart extends React.Component {
  render() {
    return (
      <div className="third-part-container relative">
        <br></br>
        <div className="backshape" id="#content">
          <div className="container">
            <div className="logo-part1">
              <img src={shape4} alt="shape4" />
            </div>
            <div className="logo-part2">
              <img src={shape5} alt="shape5" />
            </div>
          </div>
          <div className="container">
            <div className="third-part-text-container">
              <h6>WORK PROCESS</h6>
              <h1>
                This is How We <br></br>Streameline Our Process
              </h1>
              <span></span>
            </div>
            <div className="third-container-flex-part container">
              <div className="flex-container">
                <div className="third-part-flex-logo">
                  <div className="image-container">
                    <img src={shape1} alt="first" />
                  </div>
                </div>
                <div>
                  <h3>Our Plan is Simple</h3>
                  <p>
                    Acelerator Program support may <br></br>be financial andor
                    provision.
                  </p>
                </div>
              </div>
              <div className="flex-container">
                <div className="third-part-flex-logo">
                  <div className="image-container">
                    <img src={shape2} alt="second" />
                  </div>
                </div>
                <div>
                  <h3>We are Transparent</h3>
                  <p>
                    Acelerator Program support may<br></br> be financial andor
                    provision.
                  </p>
                </div>
              </div>
              <div className="flex-container">
                <div className="third-part-flex-logo">
                  <div className="image-container">
                    <img src={shape3} alt="third" />
                  </div>
                </div>
                <div>
                  <h3>We are Innovative</h3>
                  <p>
                    Acelerator Program support may <br></br>be financial andor
                    provision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default thirdPart;
