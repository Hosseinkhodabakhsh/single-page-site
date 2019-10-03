import React from "react";

class EightPart extends React.Component {
  render() {
    return (
      <div>
        <div className="Eight-container">
          <div className="container">
            <div className="head-text">
              <h6>SERVICES</h6>
              <h1>See How Much You Can Save With Unofee</h1>
              <span></span>
              <p>
                We are an online real estate website and our mission is to
                change the way homes are sold by <br></br>bringing down the high
                costs of selling a home and empowering
              </p>
            </div>
            <div className="calculate-container">
              <div className="value-texts-right">
                <h1>$83002.75</h1>
                <h2>Unofee Buyer Savings</h2>
              </div>
              <div className="value-texts-left">
                <h1>$282011</h1>
                <h2>Unofee Seller Savings</h2>
              </div>

              <div className="slidecontainer">
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={50}
                  className="slider"
                  id="myRange"
                />
              </div>
            </div>
            <br></br>
            <div className="head-text">
              <h6>CONTACT</h6>
              <h1>Want to Sell Your Property?</h1>
              <span></span>
              <input
                type="submit"
                required=""
                class="button-box"
                value="Sign up to purchase"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EightPart;
