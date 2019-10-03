import React from "react";

let shapeq = require("./assets/images/qoute.png");
let shaped = require("./assets/images/white-dot-2.png");
let person = require("./assets/images/person.png");

class Fifthpart extends React.Component {
  render() {
    return (
      <div className="fifth-container backshape">
        <div className="container">
          <div className="internal-image-content">
            <img src={person} alt="person" />
            <div className="shape-part">
              <img src={shaped} alt="shape" className="img-fluid" />
            </div>
          </div>
          <div className="internal-text-contet ">
            <img src={shapeq} alt="qoute" />
            <h3>
              They were always easy to reach even when they were on their
              vacation. They helped us out with an whatever issue came up, and
              we had a number of them. From home repairs to changing lenders,
              they guided us through the process
            </h3>

            <h3>Eunice Fowler</h3>
            <h6>CEO of Interactive Brokers Group</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Fifthpart;
