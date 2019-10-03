import React from "react";

let decor = require("./assets/images/decor.jpg");

let shape1 = require("./assets/images/shape-1.svg");

class SeventhPart extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="seventh-container">
            <div className="image-container">
              <img src={decor} alt="helloDecor"></img>
              <div className="shape">
                <img src={shape1} alt="shape"></img>
              </div>
            </div>
            <div className="text-container">
              <div className="internal-text">
                <h6>Purchase</h6>
                <h1>Purchase Home</h1>
                <span></span>
                <p>
                  God creates dinosaurs. God destroys dinosaurs. God creates
                  Man. Man destroys God. Man creates Dinosaurs. You know what?
                  It is beets. I've crashed into a beet truck. Did he just throw
                  my cat out of the window? My dad once told me, laugh and the
                  world laughs with you, Cry
                </p>
                <input
                  type="submit"
                  required
                  className="button-box"
                  value="Purchase"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeventhPart;
