import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import SecondPart from "./components/second-part.js";
import ThirdPart from "./components/third-part.js";
import ForthPart from "./components/forth-part.js";
import FifthPart from "./components/fifth-part.js";
import SixthPart from "./components/sixth-part.js";
import SeventhPart from "./components/seventh-part.js";
import EightPart from "./components/eight-part.js";
import Footer from "./components/footer.js";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <SecondPart></SecondPart>
      <ThirdPart></ThirdPart>
      <ForthPart></ForthPart>
      <FifthPart></FifthPart>
      <SixthPart></SixthPart>
      <SeventhPart></SeventhPart>
      <EightPart></EightPart>
      <Footer></Footer>
    </div>
  );
}

export default App;
