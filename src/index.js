import React from "react";
import ReactDOM from "react-dom";
import getURL from "./urls";

const customStyle = {
  color: "blue",
  fontSize: "60px",
  "text-align": "center"
};

// Changing on the fly
customStyle.color = "gray";

var title = "Favourite";
ReactDOM.render(
  <div>
    <h1 className="heading">{title}</h1>
    <h1 style={customStyle}>FOODS</h1>
    <div>
      <img className="food-img" src={getURL(1)} alt="Banana" />
      <img className="food-img" src={getURL(2)} alt="Cut Banana" />
      <img className="food-img" src={getURL(3)} alt="Dolphin Banana" />
    </div>
  </div>,
  document.getElementById("root")
);
