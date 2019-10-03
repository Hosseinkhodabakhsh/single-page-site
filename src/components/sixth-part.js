import React from "react";

let ErrorIcon = require("./assets/images/error.png");

let yesIcon = require("./assets/images/yes.png");

class SixthPart extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="sixth-container">
            <div className="first-header-content">
              <h6>Compare</h6>
              <h1>Compare Us With Others</h1>
              <span></span>
              <p>
                God creates dinosaurs. God destroys dinosaurs. God creates Man.
                Man destroys God. Man creates Dinosaurs. You know what? It is
                beets. I've crashed into a beet truck. Did he just throw my cat
                out of the window? My dad once told me, laugh and the world
                laughs with you, Cry
              </p>
            </div>
            <div className="sixth-part-1-flex">
              <div className="first-tab">
                <h6>Unofee</h6>
              </div>
              <div className="tabs">
                <h6>For Sale By Owner</h6>
              </div>
              <div className="tabs">
                <h6>Real Estate Agent</h6>
              </div>
            </div>
            <div className="sixth-part-2-flex">
              <div className="left-element">
                <div className="title-bar">
                  <h3>Listed on MLS</h3>
                </div>
                <div className="image-bar">
                  <img src={yesIcon} alt="no" />
                </div>
              </div>
              <div className="right-elements">
                <img src={ErrorIcon} alt="no" />
              </div>
              <div className="right-elements">
                <img src={yesIcon} alt="no" />
              </div>
            </div>
            <div className="sixth-part-2-flex">
              <div className="left-element">
                <div className="title-bar">
                  <h3>Cost</h3>
                </div>
                <div className="second-text">
                  <h1>$299</h1>
                </div>
              </div>
              <div className="right-elements">
                <img src={ErrorIcon} alt="no" />
              </div>
              <div className="text">
                <h1>4—6%</h1>
              </div>
            </div>
            <div className="sixth-part-2-flex">
              <div className="left-element">
                <div className="title-bar">
                  <h3>Professional Support</h3>
                </div>
                <div className="image-bar">
                  <img src={yesIcon} alt="no" />
                </div>
              </div>
              <div className="right-elements">
                <img src={ErrorIcon} alt="no" />
              </div>
              <div className="right-elements">
                <img src={yesIcon} alt="no" />
              </div>
            </div>
            <div className="sixth-part-2-flex">
              <div className="left-element">
                <div className="title-bar">
                  <h3>Control Your Listing</h3>
                </div>
                <div className="image-bar">
                  <img src={yesIcon} alt="no" />
                </div>
              </div>
              <div className="right-elements">
                <img src={yesIcon} alt="no" />
              </div>
              <div className="right-elements">
                <img src={ErrorIcon} alt="no" />
              </div>
            </div>
            <div className="sixth-part-2-flex">
              <div className="left-element">
                <div className="title-bar">
                  <h3>Marketing Resources</h3>
                </div>
                <div className="image-bar">
                  <img src={yesIcon} alt="no" />
                </div>
              </div>
              <div className="right-elements">
                <img src={ErrorIcon} alt="no" />
              </div>
              <div className="right-elements">
                <img src={yesIcon} alt="no" />
              </div>
            </div>
            <div className="sixth-part-2-flex">
              <div className="left-element">
                <div className="title-bar">
                  <h3>Real Estate Education</h3>
                </div>
                <div className="image-bar">
                  <img src={yesIcon} alt="no" />
                </div>
              </div>
              <div className="right-elements">
                <img src={ErrorIcon} alt="no" />
              </div>
              <div className="right-elements">
                <img src={ErrorIcon} alt="no" />
              </div>
            </div>
            <br></br>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SixthPart;
