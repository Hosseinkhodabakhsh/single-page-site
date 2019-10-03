import React from "react";

let shape1 = require("./assets/images/a.svg");
let shape2 = require("./assets/images/b.svg");
let shape3 = require("./assets/images/c.svg");
let shape4 = require("./assets/images/d.svg");
let shape5 = require("./assets/images/e.svg");

let logo1 = require("./assets/images/link-1.svg");
let logo2 = require("./assets/images/link-2.svg");
let logo3 = require("./assets/images/link-3.svg");
let logo4 = require("./assets/images/link-4.svg");
let logo5 = require("./assets/images/link_5.svg");

let logo6 = require("./assets/images/link-6.svg");
let logo7 = require("./assets/images/link-7.svg");
let logo8 = require("./assets/images/link-8.svg");

class ForthPart extends React.Component {
  render() {
    return (
      <div>
        <div className="forth-part-cinainer">
          <div className="header-part">
            <h6>SERVICES</h6>
            <h1>Flat Free Services</h1>
            <span></span>
          </div>
          <div className="flex-container">
            <div className="internal-flex">
              <div className="forth-part-flex-logo">
                <div className="image-container">
                  <img src={shape1} alt="a" />
                </div>
              </div>
              <div className="text-container">
                <h2>Private Showings</h2>
                <p>
                  Remind me to thank John for a lovely house weekend. Just my
                  luck, no ice. Forget the fat lady Remind us
                </p>
              </div>
            </div>
            <div className="internal-flex">
              <div className="forth-part-flex-logo">
                <div className="image-container">
                  <img src={shape2} alt="b" />
                </div>
              </div>
              <div className="text-container">
                <h2>Conducting Open Houses</h2>
                <p>
                  Remind me to thank John for a lovely house weekend. Just my
                  luck, no ice. Forget the fat lady Remind us
                </p>
              </div>
            </div>
          </div>
          <div className="flex-container">
            <div className="internal-flex">
              <div className="forth-part-flex-logo">
                <div className="image-container">
                  <img src={shape3} alt="a" />
                </div>
              </div>
              <div className="text-container">
                <h2>Coordinating Showings</h2>
                <p>
                  Remind me to thank John for a lovely house weekend. Just my
                  luck, no ice. Forget the fat lady Remind us
                </p>
              </div>
            </div>
            <div className="internal-flex">
              <div className="forth-part-flex-logo">
                <div className="image-container">
                  <img src={shape4} alt="b" />
                </div>
              </div>
              <div className="text-container">
                <h2>Reviewing/Screening Offers</h2>
                <p>
                  Remind me to thank John for a lovely house weekend. Just my
                  luck, no ice. Forget the fat lady Remind us
                </p>
              </div>
            </div>
          </div>
          <div className="flex-container">
            <div className="internal-flex">
              <div className="forth-part-flex-logo">
                <div className="image-container">
                  <img src={shape5} alt="a" />
                </div>
              </div>
              <div className="text-container">
                <h2>Negotiating with Potential Buyers</h2>
                <p>
                  Remind me to thank John for a lovely house weekend. Just my
                  luck, no ice. Forget the fat lady Remind us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="forth-part-logo-flex logopart">
            <div>
              <img src={logo1} alt="" class="img-fluid" />
            </div>
            <div>
              <img src={logo2} alt="" class="img-fluid" />
            </div>
            <div>
              <img src={logo3} alt="" class="img-fluid" />
            </div>
            <div>
              <img src={logo4} alt="" class="img-fluid" />
            </div>
            <div>
              <img src={logo5} alt="" class="img-fluid" />
            </div>
          </div>
          <div className="forth-part-logo-flex logopart second-part">
            <div>
              <img src={logo6} alt="" class="img-fluid" />
            </div>
            <div>
              <img src={logo7} alt="" class="img-fluid" />
            </div>
            <div>
              <img src={logo8} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForthPart;
